"use client";

import { fetchShopItems } from "@/api/shop";
import { useQuery } from "@tanstack/react-query";

import Typography from "@/components/typography/typography";

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

  return (
    <>
      <PromotionBanner />
      <Typography variant="h4" className="font-safira-march mt-10 mb-6">
        Ticketing
      </Typography>
      <div className="w-full flex flex-col gap-4 items-center justify-center rounded-3xl relative overflow-hidden py-4 px-4">
        <div className="absolute h-full w-full bg-gradient-to-b from-[#FF2F3F99] to-white top-0 left-0 -z-10"></div>
        <div className="flex items-center gap-4 w-full">
          {/* Not the final form of countdown component, but might be replaced by some library component. Therefore, it will be hardcoded for now */}
          <div className="text-white font-bold italic text-xl">
            BUNDLES TIME!
          </div>
        </div>
        <BundleCards bundles={data?.bundles ?? []} />
      </div>
      <div className="w-full flex flex-col gap-4 items-center justify-center rounded-3xl relative overflow-hidden py-4 px-4">
        <ShowCards shows={data?.shows ?? []} />
      </div>
      <Typography variant="h4" className="font-safira-march mt-10 mb-6">
        Merchandise
      </Typography>
      <div className="flex gap-4 flex-wrap">
        <ClothingCards clothings={data?.clothings ?? []} />
        <GenericCards generics={data?.generics ?? []} />
      </div>
    </>
  );
}
