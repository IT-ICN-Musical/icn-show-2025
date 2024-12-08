import { RetrieveClothingDetailsResponse } from "@/types/items";
import Image from "next/image";

import Typography from "@/components/typography/typography";

export function ClothingCard({ clothing }: ClothingCardProps) {
  return (
    <div className="flex flex-col gap-1 shadow p-4">
      <Image
        src={clothing.image_url ?? ""}
        width={80}
        height={80}
        alt="merchandise-image"
        className="object-cover w-full"
      />
      <Typography variant="p" className="text-sm sm:text-md">
        {clothing.name}
      </Typography>
      <Typography variant="p" className="text-xs sm:text-xs">
        SGD{" "}
        <span className="font-bold text-md sm:text-xl">
          {(clothing.min_price / 100).toFixed(2)}
        </span>
      </Typography>
    </div>
  );
}

type ClothingCardProps = {
  clothing: RetrieveClothingDetailsResponse;
};
