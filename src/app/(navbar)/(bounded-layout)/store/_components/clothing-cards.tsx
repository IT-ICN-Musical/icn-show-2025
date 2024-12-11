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
}: {
  clothing: RetrieveClothingDetailsResponse;
}) {
  return (
    <ClothingSelection clothing={clothing} key={clothing.clothing_id}>
      <button className="hover:scale-[1.05] duration-300 transition-scale">
        <ClothingCard clothing={clothing} />
      </button>
    </ClothingSelection>
  );
}

export function ClothingCards({ clothings }: ClothingCardsProps) {
  return (
    <>
      {clothings.map((clothing) => (
        <ClothingItem clothing={clothing} key={clothing.clothing_id} />
      ))}
    </>
  );
}

type ClothingCardsProps = {
  clothings: RetrieveClothingDetailsResponse[];
};
