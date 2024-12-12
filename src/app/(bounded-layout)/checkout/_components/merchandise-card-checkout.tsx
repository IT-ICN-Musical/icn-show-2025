import { Ruler, Shirt, Trash } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function MerchandiseCardCheckout({
  name,
  size,
  quantity,
  image,
  onDelete,
}: MerchandiseCardCheckoutProps) {
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
        <div className="flex flex-row items-center">
          <Ruler strokeWidth={2} className="w-4" color="#71717A" />
          <p className="font-mont text-xs font-normal ml-1 text-zinc-500">
            Size {size}
          </p>
        </div>
        <div className="flex flex-row items-center">
          <Shirt strokeWidth={2} className="w-4" color="#71717A" />
          <p className="font-mont text-xs font-normal ml-1 text-zinc-500">
            x {quantity}
          </p>
        </div>
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

type MerchandiseCardCheckoutProps = {
  name: string;
  size: string;
  quantity: number;
  image: string;
  onDelete?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;
