"use client";

import { previewOrder } from "@/api/preview-order";
import { useCartStore } from "@/store/cart";
import { ItemOrderPreview, PreviewOrderResponse } from "@/types/preview-order";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";

import { AppliedPromotionBanner } from "./_components/applied-promotion-banner";
import { GenericCardCheckout } from "./_components/generic-card-checkout";
import { MerchandiseCardCheckout } from "./_components/merchandise-card-checkout";
import { ShowCardCheckout } from "./_components/show-card-checkout";

export default function Checkout() {
  const router = useRouter();
  const promoInputRef = useRef<HTMLInputElement>(null);
  // const cart = useCartStore((state) => state.cart);
  const [cart, setCart] = useState([
    // night tickets
    {
      item_id: "3fae913a-4e42-49d3-ba14-5f99bc8ca12a",
      quantity: 2,
    },
    // rose flower
    {
      item_id: "51945a6b-7aea-4ef0-9320-8db35a23e6e0",
      quantity: 2,
    },
    //  night ticket + 1 clothes
    {
      item_id: "e7b78f79-a337-43e2-8e7e-c3f8efa0ced5",
      quantity: 1,
      bundle_option: [
        {
          item_id: "45367ac5-8a9e-4ae0-98c7-62310d3d091c",
          quantity: 1,
        },
        {
          item_id: "cd39fb52-a808-4fe8-8602-e3bd7c74bdc2",
          quantity: 1,
        },
        {
          item_id: "02caa0e6-ae75-4923-a2b8-3fbefe65fe83",
          quantity: 1,
        },
      ],
    },
  ]);

  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");

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
    enabled: cart.length > 0,
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

  const isMerchandise = (item: ItemOrderPreview) => "size" in item;

  if (isLoading) return <div>Loading...</div>;
  if (error || !orderPreview)
    return <div>Error loading order details. Please try again.</div>;
  const ticketItems = orderPreview?.items.filter(
    (item) => !isMerchandise(item),
  );
  const isTicketItem = (
    item: ItemOrderPreview,
  ): item is ItemOrderPreview & {
    start_time?: number;
    end_time?: number;
    is_selling_fast?: boolean;
  } => !("size" in item);
  const merchItems = orderPreview?.items.filter((item) => isMerchandise(item));
  const isMerchandiseItem = (
    item: ItemOrderPreview,
  ): item is ItemOrderPreview & {
    size?: string;
  } => "size" in item;

  return (
    <div className="relative flex flex-col min-h-screen h-screen bg-zinc-50">
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
        <div className="px-4 my-2">
          {isPromoApplied && <AppliedPromotionBanner />}
        </div>
        {ticketItems.map((item, index) => {
          const hasValidTime =
            isTicketItem(item) && item.start_time && item.end_time;

          if (hasValidTime) {
            return (
              <div key={`ticket-${index}`}>
                <ShowCardCheckout
                  name={item.name}
                  time={`${new Date((item.start_time ?? 0) * 1000).toLocaleString()} - ${new Date((item.end_time ?? 0) * 1000).toLocaleString()}`}
                  quantity={item.quantity}
                  image={item.image_url ?? ""}
                />
              </div>
            );
          }

          return (
            <div key={`generic-${index}`} className="px-4">
              <GenericCardCheckout
                name={item.name}
                quantity={item.quantity}
                image={item.image_url ?? ""}
              />
            </div>
          );
        })}
        <div className="px-4">
          {merchItems.map((item, index) => (
            <div key={index}>
              <MerchandiseCardCheckout
                name={item.name}
                size={
                  isMerchandiseItem(item) && item.size
                    ? item.size
                    : "Size not available"
                }
                quantity={item.quantity}
                image={item.image_url ?? ""}
              />
            </div>
          ))}
          {!isPromoApplied && (
            <div>
              <div className="bg-white rounded-lg shadow-sm flex flex-col h-[102px] p-4">
                <p className="font-mont text-sm font-medium mb-1">Promo Code</p>
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
          <div className="my-4 p-4 bg-white rounded-lg shadow">
            <p className="text-sm font-mont font-medium mb-3">Price Details</p>
            {orderPreview.items.map((item, index) => (
              <div key={index} className="flex flex-row justify-between">
                <p className="text-sm font-mont font-normal my-1">
                  {item.name}
                </p>
                <div className="flex items-center gap-2">
                  {"old_unit_price" in item ? (
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
                      SGD {(item.unit_price / 100).toFixed(2)} x {item.quantity}
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
        </div>
        <div className="bg-white shadow-xl p-4 absolute left-0 bottom-0 w-full">
          <Button className="bg-primary-700 rounded-lg w-full text-white text-center h-11">
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}
