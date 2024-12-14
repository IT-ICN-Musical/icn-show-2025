import { cn } from "@/lib/utils";
import { RetrieveClothingDetailsResponse } from "@/types/items";

import { ClothingCard } from "./clothing-card";
import { ClothingSelection } from "./selection/clothing-selection";

function ClothingItem({
  clothing,
  cartItems,
}: {
  clothing: RetrieveClothingDetailsResponse;
  cartItems: Record<string, number>;
}) {
  return (
    <ClothingSelection
      cartAmount={cartItems}
      clothing={clothing}
      key={clothing.clothing_id}
    >
      <button
        disabled={clothing.max_order <= 0}
        className={cn(
          "duration-300 transition-scale",
          clothing.max_order <= 0 ? "grayscale" : "hover:scale-[1.01] ",
        )}
      >
        <ClothingCard clothing={clothing} />
      </button>
    </ClothingSelection>
  );
}

export function ClothingCards({ clothings, cartItems }: ClothingCardsProps) {
  return (
    <>
      {clothings.map((clothing) => (
        <ClothingItem
          cartItems={cartItems}
          clothing={clothing}
          key={clothing.clothing_id}
        />
      ))}
    </>
  );
}

type ClothingCardsProps = {
  clothings: RetrieveClothingDetailsResponse[];
  cartItems: Record<string, number>;
};
