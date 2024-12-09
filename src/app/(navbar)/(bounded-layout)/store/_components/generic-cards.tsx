import { RetrieveGenericDetailsResponse } from "@/types/items";

import { GenericCard } from "./generic-card";

export function GenericCards({ generics }: GenericCardsProps) {
  return (
    <>
      {generics.map((generic) => (
        <GenericCard generic={generic} key={generic.item_id} />
      ))}
    </>
  );
}

type GenericCardsProps = {
  generics: RetrieveGenericDetailsResponse[];
};
