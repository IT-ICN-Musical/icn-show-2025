import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

import MerchandiseDummyImage from "@/app/(navbar)/(bounded-layout)/store/_assets/merchandise-dummy-image.png";

import Typography from "@/components/typography/typography";

export function MerchandiseCard({
  name,
  price,
  className,
  max_order,
  ...rest
}: MerchandiseCardProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)} {...rest}>
      <Image
        src={MerchandiseDummyImage}
        alt="merchandise-dummy-image"
        className="object-cover w-full"
      />
      <Typography variant="h4">{name}</Typography>
      {max_order > 0 ? (
        <Typography variant="p">
          SGD <span className="font-bold text-xl">{price}</span>
        </Typography>
      ) : (
        <Typography variant="p">
          <span className="font-bold text-xl">Out of stock</span>
        </Typography>
      )}
    </div>
  );
}

type MerchandiseCardProps = {
  name: string;
  price: string;
  max_order: number;
} & React.HTMLAttributes<HTMLDivElement>;
