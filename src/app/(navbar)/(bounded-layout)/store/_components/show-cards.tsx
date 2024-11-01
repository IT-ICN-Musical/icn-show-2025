import { RetrieveShowDetailsResponse } from "@/types/items";

import { ShowCard } from "./show-card";

export function ShowCards({ shows }: ShowCardsProps) {
  return (
    <div className="relative flex flex-col w-full gap-4">
      {shows.map((show) => (
        <ShowCard show={show} />
      ))}
    </div>
  );
}

type ShowCardsProps = {
  shows: RetrieveShowDetailsResponse[];
};
