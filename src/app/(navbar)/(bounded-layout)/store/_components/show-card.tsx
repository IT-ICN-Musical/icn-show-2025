import { formatTimeRange } from "@/lib/time";
import { RetrieveShowDetailsResponse } from "@/types/items";
import { Clock12, Info, ShoppingCart } from "lucide-react";
import Image from "next/image";

import LeftTicket from "@/app/(navbar)/(bounded-layout)/store/_assets/left-ticket.svg";
import RightTicket from "@/app/(navbar)/(bounded-layout)/store/_assets/right-ticket.svg";

import Typography from "@/components/typography/typography";

import { LeftTicketBorder, RightTicketBorder } from "./ticket-borders";

export function ShowCard({ show }: BundleCardProps) {
  return (
    <div className="w-full flex bg-inherit h-[166px]">
      <LeftTicketBorder />
      <div className="flex items-center justify-center sm:gap-2 gap-0 bg-white flex-grow px-3 border-y border-[#D9D9D9]">
        <div>
          <Image
            src={show.image_url ?? ""}
            alt="ticket-image"
            width={20}
            height={20}
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
              {formatTimeRange(show.start_time, show.end_time)}
            </Typography>
            <Typography
              className="text-[#71717As] flex gap-2 items-center text-xs sm:text-base"
              variant="p"
            >
              <Info size={12} />
              Description placeholder
            </Typography>
          </div>
          <div className="flex justify-between">
            <div className="text-sm sm:text-lg">
              SGD{" "}
              <span className="font-bold">
                {(show.min_price / 100).toFixed(2)}
              </span>
            </div>
            <ShoppingCart className="bg-primary-700 text-white p-1 rounded-md sm:w-8 sm:h-8 h-6 w-6" />
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
