import { cn } from "@/lib/utils";
import { Clock12, Info, ShoppingCart } from "lucide-react";
import Image from "next/image";

import BundleDummyImage from "@/app/(navbar)/(bounded-layout)/store/_assets/bundle-dummy-image.png";
import TicketTemplate from "@/app/(navbar)/(bounded-layout)/store/_assets/ticket-template.svg";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

export function BundleCard({
  name,
  time,
  description,
  price,
  originalPrice,
  onClickCart,
}: BundleCardProps) {
  return (
    <div className="relative px-6 w-[40rem]">
      <Image
        src={TicketTemplate}
        alt="ticket-template"
        className="absolute -z-10 w-full h-40 top-0 left-0 object-cover"
      />
      <div className="flex items-center justify-center gap-2">
        <div>
          <Image
            src={BundleDummyImage}
            alt="bundle-dummy-image"
            className="rounded-lg h-32 w-32"
          />
        </div>
        <div className="flex flex-col py-4 px-6 flex-grow gap-6">
          <div>
            <Typography variant="h5">{name}</Typography>
            <Typography
              className="text-[#71717As] flex gap-2 items-center"
              variant="p"
            >
              <Clock12 size={12} />
              {time}
            </Typography>
            <Typography
              className="text-[#71717As] flex gap-2 items-center"
              variant="p"
            >
              <Info size={12} />
              {description}
            </Typography>
          </div>
          <div className="flex justify-between">
            <BundleCardPrice price={price} originalPrice={originalPrice} />
            <Button
              className="bg-primary-700 text-white rounded-md p-[0.4rem] aspect-square"
              onClick={onClickCart}
            >
              <ShoppingCart className="" size={28} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const BundleCardPrice = ({ price, originalPrice }: BundleCardPriceProps) => {
  const isDiscounted = originalPrice !== price;
  return (
    <div>
      <span className={cn(isDiscounted && "text-[#DC2626]")}>SGD</span>{" "}
      {isDiscounted && (
        <span className="line-through text-[#A1A1AA]">{originalPrice}</span>
      )}{" "}
      <span className={cn("font-bold", isDiscounted && "text-[#DC2626]")}>
        {price}
      </span>
    </div>
  );
};

type BundleCardProps = {
  //   image: string;
  name: string;
  time: string;
  onClickCart?: () => void;
  description: string;
  price: string;
  originalPrice?: string;
};

type BundleCardPriceProps = {
  price: string;
  originalPrice?: string;
};
