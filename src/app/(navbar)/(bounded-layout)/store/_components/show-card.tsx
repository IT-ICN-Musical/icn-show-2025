import { formatTimeRange, formatTimeRangeSgt } from "@/lib/time";
import { cn } from "@/lib/utils";
import { RetrieveShowDetailsResponse } from "@/types/items";
import { Clock12 } from "lucide-react";
import Image from "next/image";
import { format } from "path";

import Typography from "@/components/typography/typography";

import { LeftTicketBorder, RightTicketBorder } from "./ticket-borders";

export function ShowCard({ show }: BundleCardProps) {
  const startDate = new Date(show.start_time);
  const endDate = new Date(show.end_time);

  return (
    <div className="w-full flex bg-inherit h-[124px] sm:h-[166px] item-start text-start">
      <LeftTicketBorder />
      <div className="flex items-center justify-center sm:gap-2 gap-0 bg-white flex-grow px-3 border-y border-[#D9D9D9]">
        <div>
          <Image
            src={show.image_url ?? ""}
            alt="ticket-image"
            width={166}
            height={166}
            className="rounded-lg sm:h-32 sm:w-32 h-20 w-20"
          />
        </div>
        <div className="flex flex-col py-4 pl-3 flex-grow gap-6">
          <div>
            <Typography variant="p" className="text-md sm:text-xl">
              {show.name}
            </Typography>
            <Typography
              className="text-[#71717As] flex gap-2 items-center text-xs sm:text-base"
              variant="p"
            >
              <Clock12 size={12} />
              {formatTimeRangeSgt(startDate, endDate) + " SGT"}
            </Typography>
          </div>
          <div className="flex justify-between">
            {show.max_order > 0 ? (
              <>
                <div className="text-sm sm:text-lg">
                  <span className="font-book text-xs sm:text-md">from </span>
                  SGD{" "}
                  <span className="font-bold">
                    {(show.min_price / 100).toFixed(2)}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="text-sm sm:text-lg">Out of stock</div>
              </>
            )}
          </div>
        </div>
      </div>
      <RightTicketBorder />
    </div>
  );
}

type BundleCardProps = {
  show: RetrieveShowDetailsResponse;
};
