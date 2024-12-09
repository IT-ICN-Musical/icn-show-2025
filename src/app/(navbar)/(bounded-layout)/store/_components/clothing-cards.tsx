import { RetrieveClothingDetailsResponse } from "@/types/items";

import { ClothingCard } from "./clothing-card";

export function ClothingCards({ clothings }: ClothingCardsProps) {
  return (
    <>
      {clothings.map((clothing) => (
        <ClothingCard clothing={clothing} key={clothing.clothing_id} />
      ))}
    </>
  );
}

type ClothingCardsProps = {
  clothings: RetrieveClothingDetailsResponse[];
};
