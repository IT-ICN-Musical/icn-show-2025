import { RetrieveGenericDetailsResponse } from "@/types/items";
import Image from "next/image";

import Typography from "@/components/typography/typography";

export function GenericCard({ generic }: GenericCardProps) {
  return (
    <div className="flex flex-col gap-1 shadow p-4 items-start">
      <Image
        src={generic.image_url ?? ""}
        width={100}
        height={100}
        alt="merchandise-image"
        className="object-cover w-full"
      />
      <Typography variant="p" className="text-sm sm:text-md">
        {generic.name}
      </Typography>
      {generic.max_order > 0 ? (
        <Typography variant="p" className="text-xs sm:text-xs">
          SGD{" "}
          <span className="font-bold text-md sm:text-xl">
            {(generic.price / 100).toFixed(2)}
          </span>
        </Typography>
      ) : (
        <Typography variant="p" className="font-semibold text-md sm:text-xl">
          Out of stock
        </Typography>
      )}
    </div>
  );
}

type GenericCardProps = {
  generic: RetrieveGenericDetailsResponse;
};
