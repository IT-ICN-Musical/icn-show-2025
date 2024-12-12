import { fetchClothingDetails } from "@/api/shop";
import { useCartStore } from "@/store/cart";
import {
  ClientClothingItem,
  RetrieveClothingDetailsResponse,
} from "@/types/items";
import { useQuery } from "@tanstack/react-query";

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
      <button className="hover:scale-[1.05] duration-300 transition-scale">
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
