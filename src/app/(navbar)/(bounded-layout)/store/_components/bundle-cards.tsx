import { type RetrieveBundleDetailsResponse } from "@/types/items";

import { BundleCard } from "./bundle-card";

export function BundleCards({ bundles }: BundleCardsProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      {bundles.map((bundle, idx) => (
        <BundleCard bundle={bundle} key={idx} />
      ))}
    </div>
  );
}

type BundleCardsProps = {
  bundles: RetrieveBundleDetailsResponse[];
};
