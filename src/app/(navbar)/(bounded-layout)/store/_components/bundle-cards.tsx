import { type RetrieveBundleDetailsResponse } from "@/types/items";

import { BundleCard } from "./bundle-card";
import { BundleSelection } from "./selection/bundle-selection";

export function BundleCards({ bundles, cartItems }: BundleCardsProps) {
  return (
    <div className="flex flex-col w-full gap-4">
      {bundles.map((bundle, idx) => {
        return (
          <BundleSelection
            cartAmount={cartItems}
            bundle={bundle}
            key={bundle.item_id}
          >
            <button className="hover:scale-[1.01] duration-300 transition-scale">
              <BundleCard bundle={bundle} />
            </button>
          </BundleSelection>
        );
      })}
    </div>
  );
}

type BundleCardsProps = {
  bundles: RetrieveBundleDetailsResponse[];
  cartItems: Record<string, number>;
};
