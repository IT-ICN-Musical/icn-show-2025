import { cn } from "@/lib/utils";
import { RetrieveBundleDetailsResponse } from "@/types/items";
import { Clock12, Info, ShoppingCart } from "lucide-react";
import Image from "next/image";

import Typography from "@/components/typography/typography";

import { LeftTicketBorder, RightTicketBorder } from "./ticket-borders";

export function BundleCard({ bundle }: BundleCardProps) {
  return (
    <div className="w-full flex bg-inherit h-[166px] item-start text-start">
      <LeftTicketBorder />

      <div className="flex items-center justify-center sm:gap-2 gap-0 flex-grow bg-white px-3 border-y border-[#D9D9D9]">
        <div>
          <Image
            src={bundle.image_url ?? ""}
            alt="ticket-image"
            width={20}
            height={20}
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
              Time placeholder
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
            <BundleCardPrice
              minPrice={(bundle.min_price / 100).toFixed(2)}
              oldMinPrice={(bundle.old_min_price / 100).toFixed(2)}
            />
            <ShoppingCart className="bg-primary-700 text-white p-1 rounded-md sm:w-8 sm:h-8 h-6 w-6" />
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
      <span className={cn(isDiscounted && "text-[#DC2626]")}>SGD</span>{" "}
      {isDiscounted && (
        <span className="line-through text-[#A1A1AA]">{oldMinPrice}</span>
      )}{" "}
      <span className={cn("font-bold", isDiscounted && "text-[#DC2626]")}>
        {minPrice}
      </span>
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
