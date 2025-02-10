import { cn } from "@/lib/utils";
import { RetrieveGenericDetailsResponse } from "@/types/items";

import { GenericCard } from "./generic-card";
import { GenericSelection } from "./selection/generic-selection";

export function GenericCards({ generics, cartItems }: GenericCardsProps) {
  return (
    <>
      {generics.map((generic) => (
        <GenericSelection
          cartAmount={cartItems[generic.item_id]}
          generic_item={generic}
          key={generic.item_id}
        >
          <button
            disabled={generic.max_order <= 0}
            className={cn(
              "duration-300 transition-scale",
              generic.max_order <= 0 ? "grayscale" : "hover:scale-[1.01] ",
            )}
          >
            <GenericCard generic={generic} key={generic.item_id} />
          </button>
        </GenericSelection>
      ))}
    </>
  );
}

type GenericCardsProps = {
  generics: RetrieveGenericDetailsResponse[];
  cartItems: Record<string, number>;
};
