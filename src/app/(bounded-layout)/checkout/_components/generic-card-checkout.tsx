import { Ban, Box, Trash } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function GenericCardCheckout({
  name,
  quantity,
  image,
  onDelete,
  isAvailable,
}: GenericCardCheckoutProps) {
  return (
    <div className="relative bg-white p-4 rounded-lg border-[#E4E4E7] border-[0.75px] flex flex-row mb-2 h-[88px] items-center">
      <div>
        <Image
          className="w-16 h-16 rounded-sm mr-4"
          src={image}
          width={64}
          height={64}
          alt="ticket image"
        />
      </div>
      <div>
        <p className="text-sm font-mont font-medium">{name}</p>
        {isAvailable ? (
          <div className="flex flex-row items-center">
            <Box strokeWidth={2} className="w-4" color="#71717A" />
            <p className="font-mont text-xs font-normal ml-1 text-zinc-500">
              x {quantity}
            </p>
          </div>
        ) : (
          <div className="flex flex-row items-center">
            <Ban strokeWidth={2} className="w-4" color="#71717A" />
            <p className="font-mont text-xs font-normal ml-1 text-zinc-500">
              Out of stock
            </p>
          </div>
        )}
      </div>
      <Button
        className="absolute right-[25px] top-2/4 -translate-y-2/4 z-20 w-fit px-2 py-2 aspect-square"
        variant="destructive"
        size="sm"
        type="button"
        onClick={onDelete}
      >
        <Trash />
      </Button>
    </div>
  );
}

type GenericCardCheckoutProps = {
  name: string;
  quantity: number;
  image: string;
  isAvailable: boolean;
  onDelete?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;
