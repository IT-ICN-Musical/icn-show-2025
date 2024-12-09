import { RetrieveGenericDetailsResponse } from "@/types/items";
import Image from "next/image";

import Typography from "@/components/typography/typography";

export function GenericCard({ generic }: GenericCardProps) {
  return (
    <div className="flex flex-col gap-1 shadow p-4">
      <Image
        src={generic.image_url ?? ""}
        width={80}
        height={80}
        alt="merchandise-image"
        className="object-cover w-full"
      />
      <Typography variant="p" className="text-sm sm:text-md">
        {generic.name}
      </Typography>
      <Typography variant="p" className="text-xs sm:text-xs">
        SGD{" "}
        <span className="font-bold text-md sm:text-xl">
          {(generic.price / 100).toFixed(2)}
        </span>
      </Typography>
    </div>
  );
}

type GenericCardProps = {
  generic: RetrieveGenericDetailsResponse;
};
