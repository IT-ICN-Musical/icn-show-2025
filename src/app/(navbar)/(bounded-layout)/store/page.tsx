"use client";

import { fetchShopItems } from "@/api/shop";
import { useCartStore } from "@/store/cart";
import { useQuery } from "@tanstack/react-query";
import { Package, Shirt, ShoppingCart, Ticket } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { BundleCards } from "./_components/bundle-cards";
import { ClothingCards } from "./_components/clothing-cards";
import { GenericCards } from "./_components/generic-cards";
import { ShowCards } from "./_components/show-cards";

export default function Shop() {
  const { data, isLoading } = useQuery({
    queryKey: ["shopItems"],
    queryFn: fetchShopItems,
  });

  const { cart } = useCartStore();
  // create Record<string, number> for each item in cart
  // aggregate
  const cartItemRecords = useMemo(() => {
    const tmp: Record<string, number> = {};
    cart.forEach((item) => {
      tmp[item.item_id] = (tmp[item.item_id] ?? 0) + 1;
      if (item.bundle_option) {
        item.bundle_option.forEach((option) => {
          tmp[option.item_id] = (tmp[option.item_id] ?? 0) + 1;
        });
      }
    });

    return tmp;
  }, [JSON.stringify(cart)]);

  const scrolltoId = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const displayMerchandise =
    (data?.clothings ?? []).length > 0 || (data?.generics ?? []).length > 0;

  const displayShow = (data?.shows ?? []).length > 0;
  const displayBundle = (data?.bundles ?? []).length > 0;

  const router = useRouter();
  return (
    <>
      <Button
        className="flex relative fixed bottom-[5%] right-[5%] h-12 w-fit bg-primary-800 px-4 sm:px-6 py-6 sm:py-8 rounded-full gap-4 z-40"
        onClick={() => router.push("/checkout")}
      >
        <Typography variant="h6" className="text-white">
          Checkout
        </Typography>
        <ShoppingCart />
      </Button>
      {/* TODO: Add promotion banner in the future */}
      {/*<PromotionBanner />*/}
      <Typography
        variant="h4"
        className="font-safira-march mt-10 mb-6 text-center"
      >
        Store
      </Typography>

      {/* Add scroll down to */}
      <div className="w-full bg-white flex gap-4 justify-center items-center mb-4">
        {displayBundle && (
          <div className="flex flex-col items-center gap-1 w-24">
            <Button
              variant="outline"
              size="lg"
              className="aspect-square px-4 py-4 h-fit"
              onClick={() => scrolltoId("bundle-section")}
            >
              <Package size={28} strokeWidth={1} />
            </Button>
            <Typography variant="p" className="font-light text-xs">
              Bundles
            </Typography>
          </div>
        )}
        {displayShow && (
          <div className="flex flex-col items-center gap-1 w-24">
            <Button
              variant="outline"
              size="lg"
              className="aspect-square px-4 py-4 h-fit"
              onClick={() => scrolltoId("show-section")}
            >
              <Ticket size={28} strokeWidth={1} />
            </Button>
            <Typography variant="p" className="font-light text-xs">
              Tickets
            </Typography>
          </div>
        )}
        {displayMerchandise && (
          <div className="flex flex-col items-center gap-1 w-24">
            <Button
              variant="outline"
              size="lg"
              className="aspect-square px-4 py-4 h-fit"
              onClick={() => scrolltoId("merchandise-section")}
            >
              <Shirt size={28} strokeWidth={1} />
            </Button>
            <Typography variant="p" className="font-light text-xs">
              Merch/Flower
            </Typography>
          </div>
        )}
      </div>
      {isLoading && (
        <div className="flex flex-col w-full gap-4  py-4 px-4">
          <Skeleton className="w-full bg-inherit h-[124px] sm:h-[166px] bg-black/20" />
          <Skeleton className="w-full bg-inherit h-[124px] sm:h-[166px]  bg-black/20" />
        </div>
      )}

      {displayBundle && (
        <div
          className="w-full flex flex-col gap-4 items-center justify-center rounded-t-3xl relative overflow-hidden py-4 px-4"
          id="bundle-section"
        >
          <div className="absolute h-full w-full bg-gradient-to-b from-[#FF2F3F99] to-white top-0 left-0 -z-10"></div>
          <div className="flex items-center gap-4 w-full">
            {/* Not the final form of countdown component, but might be replaced by some library component. Therefore, it will be hardcoded for now */}
            <div className="text-white font-bold italic text-xl">
              BUNDLES TIME!
            </div>
          </div>
          <BundleCards
            cartItems={cartItemRecords}
            bundles={data?.bundles ?? []}
          />
        </div>
      )}
      {displayShow && (
        <div
          className="w-full flex flex-col gap-4 items-center justify-center rounded-3xl relative overflow-hidden py-4 px-4"
          id="show-section"
        >
          <ShowCards cartItems={cartItemRecords} shows={data?.shows ?? []} />
        </div>
      )}
      {displayMerchandise && (
        <>
          <Typography
            variant="h4"
            className="font-safira-march mt-10 mb-6 leading-10"
          >
            Merchandise/Flowers
          </Typography>
          <div className="flex gap-4 flex-wrap" id="merchandise-section">
            <ClothingCards
              cartItems={cartItemRecords}
              clothings={data?.clothings ?? []}
            />
            <GenericCards
              cartItems={cartItemRecords}
              generics={data?.generics ?? []}
            />
          </div>
        </>
      )}
    </>
  );
}
