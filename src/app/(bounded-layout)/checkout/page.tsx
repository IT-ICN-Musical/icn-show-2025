"use client";

import { submitCheckout } from "@/api/checkout";
import { generateOTP } from "@/api/otp";
import { previewOrder } from "@/api/preview-order";
import { useCartStore } from "@/store/cart";
import {
  CheckoutItemOrderRequest,
  FlowerDetails as FlowerDetailsType,
  ViewerDetails as ViewerDetailsType,
} from "@/types/checkout";
import { ItemOrderPreview, PreviewOrderResponse } from "@/types/preview-order";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

import { AppliedPromotionBanner } from "./_components/applied-promotion-banner";
import { BuyerParticulars } from "./_components/buyer-particulars";
import { FlowerDetails } from "./_components/flower-details";
import { PreviewItems } from "./_components/preview-items";
import { VerifyEmailDialog } from "./_components/verify-email";
import { ViewerDetails } from "./_components/viewer-details";

function retrieveItemsWithViewers(items: ItemOrderPreview[]): {
  quantities: Record<string, number>;
  name: Record<string, string>;
} {
  const itemQuantities: Record<string, number> = {};
  const itemNames: Record<string, string> = {};

  items.forEach((item) => {
    if (item.with_viewers) {
      if (item.item_id in itemQuantities) {
        itemQuantities[item.item_id] += item.quantity;
      } else {
        itemQuantities[item.item_id] = item.quantity;
        itemNames[item.item_id] = item.name;
      }
    } else if (item.bundle_items) {
      item.bundle_items.forEach((bundleItem) => {
        if (bundleItem.with_viewers) {
          if (bundleItem.item_id in itemQuantities) {
            itemQuantities[bundleItem.item_id] += bundleItem.quantity;
          } else {
            itemQuantities[bundleItem.item_id] = bundleItem.quantity;
            itemNames[bundleItem.item_id] = bundleItem.name;
          }
        }
      });
    }
  });

  return { quantities: itemQuantities, name: itemNames };
}

function retrieveItemsFlowers(items: ItemOrderPreview[]): {
  quantities: Record<string, number>;
  name: Record<string, string>;
} {
  const itemQuantities: Record<string, number> = {};
  const itemNames: Record<string, string> = {};

  items.forEach((item) => {
    if (item.is_flower) {
      if (item.item_id in itemQuantities) {
        itemQuantities[item.item_id] += item.quantity;
      } else {
        itemQuantities[item.item_id] = item.quantity;
        itemNames[item.item_id] = item.name;
      }
    } else if (item.bundle_items) {
      item.bundle_items.forEach((bundleItem) => {
        if (bundleItem.is_flower) {
          if (bundleItem.item_id in itemQuantities) {
            itemQuantities[bundleItem.item_id] += bundleItem.quantity;
          } else {
            itemQuantities[bundleItem.item_id] = bundleItem.quantity;
            itemNames[bundleItem.item_id] = bundleItem.name;
          }
        }
      });
    }
  });

  return { quantities: itemQuantities, name: itemNames };
}

export default function Checkout() {
  const router = useRouter();
  const promoInputRef = useRef<HTMLInputElement>(null);
  // const cart = useCartStore((state) => state.cart);
  const { cart, removeFromCart } = useCartStore();

  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");

  // dialog
  const [dialogOpen, setDialogOpen] = useState(false);

  // form details
  const [buyerDetails, setBuyerDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // const viewer details
  const [viewerDetails, setViewerDetails] = useState<ViewerDetailsType[]>();
  const [flowerDetails, setFlowerDetails] = useState<FlowerDetailsType[]>();
  const viewerDetailsCompleted =
    viewerDetails &&
    viewerDetails.every((x) => x.viewers.every((viewer) => viewer !== ""));

  const flowerDetailsCompleted =
    flowerDetails &&
    flowerDetails.every((x) =>
      x.messages.every(
        (message) =>
          message.from !== "" && message.to !== "" && message.message !== "",
      ),
    );

  const { mutate: generateOTPMutate } = useMutation({
    mutationFn: generateOTP,
    onSuccess: () => setDialogOpen(true),
  });

  const { mutate: submitCheckoutMutate } = useMutation({
    mutationFn: submitCheckout,
    onSuccess: (data) => router.push(data.payment_url),
  });

  const hidePromo = cart.length === 0 || isPromoApplied;
  const {
    data: orderPreview,
    isLoading,
    error,
  } = useQuery<PreviewOrderResponse>({
    queryKey: ["orderPreview", cart, promoCode],
    queryFn: () =>
      previewOrder({
        items: cart.map((item) => ({
          item_id: item.item_id,
          quantity: item.quantity,
          bundle_options:
            "bundle_option" in item && item.bundle_option
              ? item.bundle_option
              : undefined,
        })),
        ...(promoCode && { promo_code: promoCode }),
      }),
    retry: 1,
    staleTime: 30000,
    refetchOnWindowFocus: false,
  });

  const handleApplyPromoCode = async () => {
    const currentPromoCode = promoInputRef.current?.value;
    if (!currentPromoCode?.trim()) return;

    setPromoCode(currentPromoCode);
    try {
      const result = await previewOrder({
        items: cart.map((item) => ({
          item_id: item.item_id,
          quantity: item.quantity,
          bundle_options:
            "bundle_option" in item && item.bundle_option
              ? item.bundle_option
              : undefined,
        })),
        promo_code: currentPromoCode,
      });
      if (result.promo_available) {
        setIsPromoApplied(true);
        setPromoError("");
      } else {
        setIsPromoApplied(false);
        setPromoError("Promo code is invalid or expired");
      }
    } catch {
      setPromoError("Promo code is invalid or expired");
      setIsPromoApplied(false);
    }
  };

  const tickets = useMemo(() => {
    const itemWithViewers = retrieveItemsWithViewers(orderPreview?.items ?? []);

    return Object.entries(itemWithViewers.quantities).map(
      ([item_id, quantity]) => ({
        item_id,
        quantity,
        name: itemWithViewers.name[item_id],
      }),
    );
  }, [orderPreview]);

  const flowers = useMemo(() => {
    const itemFlowers = retrieveItemsFlowers(orderPreview?.items ?? []);

    return Object.entries(itemFlowers.quantities).map(
      ([item_id, quantity]) => ({
        item_id,
        quantity,
        name: itemFlowers.name[item_id],
      }),
    );
  }, [orderPreview]);

  // update to empty arrays
  useEffect(() => {
    // empty array of size tickets

    setViewerDetails(
      tickets.map((x) => {
        return {
          ticket_item_id: x.item_id,
          viewers: Array(x.quantity).fill(""),
        };
      }),
    );
  }, [tickets]);

  // update to empty arrays
  useEffect(() => {
    // empty array of size flowers

    setFlowerDetails(
      flowers.map((x) => {
        return {
          item_id: x.item_id,
          messages: Array.from({ length: x.quantity }, () => ({
            from: "",
            to: "",
            message: "",
            delivery: false,
          })),
        };
      }),
    );
  }, [flowers]);

  if (
    isLoading ||
    viewerDetails === undefined ||
    (viewerDetails.length === 0 && tickets.length > 0)
  )
    return <div>Loading...</div>;
  if (error || !orderPreview)
    return <div>Error loading order details. Please try again.</div>;

  return (
    <div className="relative flex flex-col min-h-screen h-screen bg-zinc-50">
      <VerifyEmailDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        email={buyerDetails.email}
        onSuccess={(token) => {
          const checkoutItems: CheckoutItemOrderRequest[] = cart.map(
            (items) => {
              return {
                item_id: items.item_id,
                quantity: items.quantity,
                bundle_options: items.bundle_option,
              };
            },
          );

          if (flowerDetails) {
            submitCheckoutMutate({
              buyer_email_token: token,
              buyer_name: buyerDetails.name,
              buyer_phone: buyerDetails.phone,
              promo_code: promoCode,
              items: checkoutItems,
              viewer_details: viewerDetails,
              flower_details: flowerDetails,
            });
          }
        }}
      />
      <div className="w-full overflow-y-auto pt-[60px] pb-[72px]">
        <div className="absolute top-0 left-0 w-full bg-white shadow-sm py-4 z-20">
          <button
            className="absolute left-5 text-black text-3xl top-3"
            style={{ zIndex: 1 }}
            onClick={() => router.back()}
          >
            ←
          </button>
          <h1 className="font-safira-march text-center">Checkout</h1>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.currentTarget.buyer_name.value;
            const phone = e.currentTarget.phone.value;
            const email = e.currentTarget.email.value;
            setBuyerDetails({ name, phone, email });

            generateOTPMutate({ email });

            setDialogOpen(true);
          }}
        >
          <div className="px-4 my-2">
            {isPromoApplied && <AppliedPromotionBanner />}
          </div>
          <PreviewItems
            orderPreview={orderPreview}
            removeFromCart={removeFromCart}
          />
          <div className="px-4">
            {orderPreview.items === null && (
              <div className="flex flex-col w-full items-center justify-center py-16">
                <Typography
                  variant="h5"
                  className="text-center text-secondary-300 font-book"
                >
                  Your cart is empty
                </Typography>
              </div>
            )}

            {!hidePromo && (
              <div>
                <div className="bg-white rounded-lg shadow-sm flex flex-col h-[102px] p-4">
                  <p className="font-mont text-sm font-medium mb-1">
                    Promo Code
                  </p>
                  <div className="flex-row flex justify-between">
                    <input
                      type="text"
                      placeholder="Enter the Promo Code"
                      className="p-3 rounded-lg border-gray-200 border text-sm font-mont font-normal w-9/12"
                      ref={promoInputRef}
                    />
                    <Button
                      className="bg-primary-700 h-full"
                      onClick={handleApplyPromoCode}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            )}
            {cart.length > 0 && (
              <div className="my-4 p-4 bg-white rounded-lg shadow">
                <p className="text-sm font-mont font-medium mb-3">
                  Price Details
                </p>
                {(orderPreview.items ?? []).map((item, index) => (
                  <div key={index} className="flex flex-row justify-between">
                    <p className="text-sm font-mont font-normal my-1">
                      {item.name}
                    </p>
                    <div className="flex items-center gap-2">
                      {item.old_unit_price ? (
                        <>
                          <p className="text-sm font-mont font-normal my-1 text-red-600">
                            SGD {(item.unit_price / 100).toFixed(2)}
                          </p>
                          <p className="text-sm font-mont font-normal my-1 line-through text-gray-500">
                            SGD {(item.old_unit_price / 100).toFixed(2)}
                          </p>
                          <p className="text-sm font-mont font-normal my-1">
                            x {item.quantity}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm font-mont font-normal my-1">
                          SGD {(item.unit_price / 100).toFixed(2)} x{" "}
                          {item.quantity}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex flex-row justify-between border-t mt-2 py-2">
                  <p className="text-sm font-mont font-semibold">Total</p>
                  <div className="flex items-center gap-2">
                    {orderPreview.old_total &&
                    orderPreview.old_total !== orderPreview.total ? (
                      <>
                        <p className="text-sm font-mont font-semibold text-red-600">
                          SGD {(orderPreview.total / 100).toFixed(2)}
                        </p>
                        <p className="text-sm font-mont font-normal line-through text-gray-500">
                          SGD {(orderPreview.old_total / 100).toFixed(2)}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm font-mont font-semibold">
                        SGD {(orderPreview.total / 100).toFixed(2)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="px-4">{cart.length > 0 && <BuyerParticulars />}</div>
          <div className="px-4">
            {tickets.length > 0 && (
              <ViewerDetails
                tickets={tickets}
                viewerDetails={viewerDetails ?? []}
                setViewerDetails={setViewerDetails}
              />
            )}
          </div>
          <div className="px-4">
            {flowerDetails && flowerDetails.length > 0 && (
              <FlowerDetails
                flowers={flowers}
                flowerDetails={flowerDetails ?? []}
                setFlowerDetails={setFlowerDetails}
              />
            )}
          </div>
          <div className="bg-white shadow-xl p-4 absolute left-0 bottom-0 w-full">
            <Button
              type="submit"
              className="bg-primary-700 rounded-lg w-full text-white text-center h-11"
              disabled={
                cart.length === 0 ||
                !viewerDetailsCompleted ||
                !flowerDetailsCompleted
              }
            >
              Checkout
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
