import { cn } from "@/lib/utils";
import { RetrieveBundleDetailsResponse } from "@/types/items";
import { Clock12, Info, ShoppingCart } from "lucide-react";
import Image from "next/image";

import LeftTicket from "@/app/(navbar)/(bounded-layout)/store/_assets/left-ticket.svg";
import RightTicket from "@/app/(navbar)/(bounded-layout)/store/_assets/right-ticket.svg";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

export function BundleCard({ bundle }: BundleCardProps) {
  return (
    <div className="w-full flex bg-inherit">
      <Image src={LeftTicket} alt="left-ticket" className="object-cover" />
      <div className="flex items-center justify-center sm:gap-2 gap-0 bg-white flex-grow">
        <div>
          <Image
            src={bundle.image_url ?? ""}
            alt="ticket-image"
            width={20}
            height={20}
            className="rounded-lg sm:h-32 sm:w-32 h-20 w-20"
          />
        </div>
        <div className="flex flex-col py-4 px-3 flex-grow gap-6">
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
              minPrice={bundle.min_price}
              oldMinPrice={bundle.old_min_price}
            />
            <ShoppingCart className="bg-primary-700 text-white p-1 rounded-md sm:w-8 sm:h-8 h-6 w-6" />
          </div>
        </div>
      </div>
      <Image src={RightTicket} alt="left-ticket" className="object-cover" />
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
