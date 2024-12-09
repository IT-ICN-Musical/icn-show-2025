import { RetrieveShowDetailsResponse } from "@/types/items";

import { TicketSelection } from "./selection/ticket-selection";
import { ShowCard } from "./show-card";

export function ShowCards({ shows }: ShowCardsProps) {
  return (
    <div className="relative flex flex-col w-full gap-4">
      {shows.map((show) => (
        <TicketSelection show={show} key={show.show_id}>
          <button className="hover:scale-[1.01] duration-300 transition-scale">
            <ShowCard show={show} />
          </button>
        </TicketSelection>
      ))}
    </div>
  );
}

type ShowCardsProps = {
  shows: RetrieveShowDetailsResponse[];
};
