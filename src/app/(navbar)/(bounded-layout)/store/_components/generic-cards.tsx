import { RetrieveGenericDetailsResponse } from "@/types/items";

import { GenericCard } from "./generic-card";
import { GenericSelection } from "./selection/generic-selection";

export function GenericCards({ generics }: GenericCardsProps) {
  return (
    <>
      {generics.map((generic) => (
        <GenericSelection generic_item={generic} key={generic.item_id}>
          <button className="hover:scale-[1.05] duration-300 transition-scale">
            <GenericCard generic={generic} key={generic.item_id} />
          </button>
        </GenericSelection>
      ))}
    </>
  );
}

type GenericCardsProps = {
  generics: RetrieveGenericDetailsResponse[];
};
