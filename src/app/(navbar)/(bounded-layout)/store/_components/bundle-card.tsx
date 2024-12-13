import { cn } from "@/lib/utils";
import { RetrieveBundleDetailsResponse } from "@/types/items";
import { Clock12, Info } from "lucide-react";
import Image from "next/image";

import Typography from "@/components/typography/typography";

import { LeftTicketBorder, RightTicketBorder } from "./ticket-borders";

export function BundleCard({ bundle }: BundleCardProps) {
  const startDate = bundle.start_time ? new Date(bundle.start_time) : undefined;
  const endDate = bundle.end_time ? new Date(bundle.end_time) : undefined;

  return (
    <div className="w-full flex bg-inherit h-[124px] sm:h-[166px] item-start text-start">
      <LeftTicketBorder />

      <div className="flex items-center justify-center sm:gap-2 gap-0 flex-grow bg-white px-3 border-y border-[#D9D9D9]">
        <div>
          <Image
            src={bundle.image_url ?? ""}
            alt="ticket-image"
            width={100}
            height={100}
            className="rounded-lg sm:h-32 sm:w-32 h-20 w-20"
          />
        </div>
        <div className="flex flex-col py-4 pl-3 flex-grow gap-6">
          <div>
            <Typography variant="p" className="text-md sm:text-xl">
              {bundle.name}
            </Typography>
            <Typography
              className="text-[#71717As] flex gap-2 items-center text-xs sm:text-base"
              variant="p"
            >
              <Clock12 size={12} />
              {startDate?.toLocaleString("en-SG", {
                timeZone: "Asia/Singapore",
                dateStyle: "short",
                timeStyle: "short",
              })}{" "}
              - {/* ASSUMING THAT THE SHOW WILL END ON THE SAME DAY */}
              {endDate?.toLocaleString("en-SG", {
                timeZone: "Asia/Singapore",
                timeStyle: "short",
              })}
            </Typography>
            {bundle.description && (
              <Typography
                className="text-[#71717As] flex gap-2 items-center text-xs sm:text-base"
                variant="p"
              >
                <Info size={12} />
                {bundle.description}
              </Typography>
            )}
          </div>
          <div className="flex justify-between">
            <BundleCardPrice
              minPrice={(bundle.min_price / 100).toFixed(2)}
              oldMinPrice={(bundle.old_min_price / 100).toFixed(2)}
            />
          </div>
        </div>
      </div>
      <RightTicketBorder />
    </div>
  );
}

function BundleCardPrice({ minPrice, oldMinPrice }: BundleCardPriceProps) {
  const isDiscounted = oldMinPrice !== minPrice;
  return (
    <div className="text-sm sm:text-lg">
      <span className="font-book text-xs sm:text-md">from </span>
      <span className={cn(isDiscounted && "text-[#DC2626]")}>SGD</span>{" "}
      <span className={cn("font-bold", isDiscounted && "text-[#DC2626]")}>
        {minPrice}
      </span>{" "}
      {isDiscounted && (
        <span className="line-through text-[#A1A1AA]">{oldMinPrice}</span>
      )}{" "}
    </div>
  );
}

type BundleCardProps = {
  bundle: RetrieveBundleDetailsResponse;
};

type BundleCardPriceProps = {
  minPrice: string;
  oldMinPrice?: string;
};
