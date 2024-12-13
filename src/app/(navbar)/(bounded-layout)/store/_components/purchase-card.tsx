import { formatTimeRangeSgt } from "@/lib/time";
import { BoxIcon, Clock12, RulerIcon, ShirtIcon, Ticket } from "lucide-react";
import Image from "next/image";

import Typography from "@/components/typography/typography";

import { LeftTicketBorder, RightTicketBorder } from "./ticket-borders";

type PurchaseCardProps = {
  title: string;
  showTimings: { startTime: string; endTime: string };
  showQuantity: number;
  merchQuantity: number;
  merchSize: string;
  imageUrl: string;
  genericQuantity: number;
};

export function PurchaseCard(props: PurchaseCardProps) {
  return (
    <div className="w-full flex bg-inherit h-[124px] sm:h-[166px] item-start text-start">
      <LeftTicketBorder />
      <div className="flex items-center justify-center sm:gap-2 gap-0 bg-white flex-grow px-3 border-y border-[#D9D9D9]">
        <div>
          <Image
            src={props.imageUrl}
            alt="ticket-image"
            width={20}
            height={20}
            className="rounded-lg sm:h-32 sm:w-32 h-20 w-20"
          />
        </div>
        <div className="flex flex-col py-4 pl-3 flex-grow gap-6">
          <div>
            <Typography variant="p" className="text-md sm:text-xl mb-2">
              {props.title}
            </Typography>
            <Typography
              className="text-slate-600  flex gap-2 items-center text-xs sm:text-base"
              variant="p"
            >
              {props.showTimings.startTime !== "" &&
                props.showTimings.endTime !== "" && (
                  <>
                    <Clock12 size={14} />
                    {formatTimeRangeSgt(
                      new Date(props.showTimings.startTime),
                      new Date(props.showTimings.endTime),
                    )}{" "}
                    SGT
                  </>
                )}
            </Typography>
            <Typography
              className="text-slate-600  flex gap-2 items-center text-xs sm:text-base"
              variant="p"
            >
              {props.showQuantity !== 0 && (
                <>
                  <Ticket size={14} />x {props.showQuantity}
                </>
              )}
            </Typography>

            <Typography
              className="text-slate-600 flex gap-2 items-center text-xs sm:text-base"
              variant="p"
            >
              {props.merchSize !== "" && (
                <>
                  <RulerIcon size={14} />
                  Size {props.merchSize}
                </>
              )}
            </Typography>
            <Typography
              className="text-slate-600  flex gap-2 items-center text-xs sm:text-base"
              variant="p"
            >
              {props.merchQuantity !== 0 && (
                <>
                  <ShirtIcon size={14} />x {props.merchQuantity}
                </>
              )}
            </Typography>
            <Typography
              className="text-slate-600  flex gap-2 items-center text-xs sm:text-base"
              variant="p"
            >
              {props.genericQuantity !== 0 && (
                <>
                  <BoxIcon size={14} />x {props.genericQuantity}
                </>
              )}
            </Typography>
          </div>
          <div className="flex justify-between"></div>
        </div>
      </div>
      <RightTicketBorder />
    </div>
  );
}
