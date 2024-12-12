"use client";

import { fetchShopItems } from "@/api/shop";
import { useCartStore } from "@/store/cart";
import { useQuery } from "@tanstack/react-query";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

import { BundleCards } from "./_components/bundle-cards";
import { ClothingCards } from "./_components/clothing-cards";
import { GenericCards } from "./_components/generic-cards";
import { PromotionBanner } from "./_components/promotion-banner";
import { ShowCards } from "./_components/show-cards";

export default function Shop() {
  const { data } = useQuery({
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

  const router = useRouter();
  return (
    <>
      <Button
        className="relative fixed bottom-[5%] right-[5%] h-12 w-12 bg-primary-800 px-2 py-2 rounded-full aspect-square z-40"
        onClick={() => router.push("/checkout")}
      >
        <ShoppingCart />
      </Button>
      <PromotionBanner />
      <Typography variant="h4" className="font-safira-march mt-10 mb-6">
        Ticketing
      </Typography>
      <div className="w-full flex flex-col gap-4 items-center justify-center rounded-t-3xl relative overflow-hidden py-4 px-4">
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
      <div className="w-full flex flex-col gap-4 items-center justify-center rounded-3xl relative overflow-hidden py-4 px-4">
        <ShowCards cartItems={cartItemRecords} shows={data?.shows ?? []} />
      </div>
      <Typography variant="h4" className="font-safira-march mt-10 mb-6">
        Merchandise
      </Typography>
      <div className="flex gap-4 flex-wrap">
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
  );
}
