import { cn } from "@/lib/utils";
import { RetrieveShowDetailsResponse } from "@/types/items";

import { TicketSelection } from "./selection/ticket-selection";
import { ShowCard } from "./show-card";

export function ShowCards({ shows, cartItems }: ShowCardsProps) {
  return (
    <div className="relative flex flex-col w-full gap-4">
      {shows.map((show) => (
        <TicketSelection cartAmount={cartItems} show={show} key={show.show_id}>
          <button
            className={cn(
              "duration-300 transition-scale",
              show.max_order <= 0 ? "grayscale" : "hover:scale-[1.01] ",
            )}
            disabled={show.max_order <= 0}
          >
            <ShowCard show={show} />
          </button>
        </TicketSelection>
      ))}
    </div>
  );
}

type ShowCardsProps = {
  shows: RetrieveShowDetailsResponse[];
  cartItems: Record<string, number>;
};
