import { cn } from "@/lib/utils";
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
            <button
              disabled={bundle.max_order <= 0}
              className={cn(
                "duration-300 transition-scale",
                bundle.max_order <= 0 ? "grayscale" : "hover:scale-[1.01] ",
              )}
            >
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
