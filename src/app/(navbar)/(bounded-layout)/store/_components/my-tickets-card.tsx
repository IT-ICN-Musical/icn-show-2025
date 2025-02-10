import { formatTimeRangeSgt } from "@/lib/time";

import Typography from "@/components/typography/typography";

import { QRCode } from "../../my-tickets/_components/qr-code";
import { LeftTicketBorder, RightTicketBorder } from "./ticket-borders";

type MyTicketsCardProps = {
  name: string;
  showTime: { startTime: string; endTime: string };
  show: string;
  category: string;
  viewerId: string;
};

export function MyTicketsCard(props: MyTicketsCardProps) {
  return (
    <div className="w-full flex bg-inherit h-[300px] item-start text-start relative">
      <LeftTicketBorder />
      <div className="flex items-center justify-center sm:gap-2 gap-0 bg-white flex-grow px-3 border-y border-[#D9D9D9]">
        <div className="flex flex-col py-4 pl-3 flex-grow gap-6">
          <div>
            <Typography
              variant="p"
              className="text-sm md:text-base text-slate-500 mb-1"
            >
              Name
            </Typography>
            <Typography variant="p" className="text-xs md:text-base mb-2">
              {props.name}
            </Typography>

            <Typography
              variant="p"
              className="text-sm md:text-base text-slate-500 mb-1"
            >
              Ticket
            </Typography>
            <Typography variant="p" className="text-xs md:text-base  mb-2">
              {props.show} - Cat {props.category}
            </Typography>
            <Typography
              variant="p"
              className="text-sm md:text-base text-slate-500 mb-1"
            >
              Date, Time
            </Typography>
            <Typography
              className="flex w-32 md:w-full gap-2 items-center text-xs md:text-base mb-2"
              variant="p"
            >
              <>
                {formatTimeRangeSgt(
                  new Date(props.showTime.startTime),
                  new Date(props.showTime.endTime),
                )}{" "}
                SGT
              </>
            </Typography>
            <Typography
              variant="p"
              className="text-sm md:text-base text-slate-500 mb-1"
            >
              Venue
            </Typography>
            <Typography variant="p" className="text-xs md:text-base mb-1">
              SOTA,{" "}
              <a
                href="https://maps.app.goo.gl/sHrNkU3NtSHXUKCaA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mr-4 hover hover:underline"
              >
                View Map
              </a>
            </Typography>
          </div>
          <div className="flex justify-between"></div>
        </div>

        <div>
          <QRCode data={props.viewerId} className="w-[150px] md:w-[200px]" />
        </div>
      </div>
      <RightTicketBorder />
    </div>
  );
}
