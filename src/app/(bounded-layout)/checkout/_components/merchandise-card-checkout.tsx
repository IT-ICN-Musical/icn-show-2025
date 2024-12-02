import { Ruler, Shirt } from "lucide-react";
import Image, { StaticImageData } from "next/image";

export function MerchandiseCardCheckout({
  name,
  size,
  quantity,
  image,
}: MerchandiseCardCheckoutProps) {
  return (
    <div className="bg-white p-4 rounded-lg border-[#E4E4E7] border-[0.75px] flex flex-row mb-2 h-[88px] items-center">
      <div>
        <Image
          className="w-16 h-16 rounded-sm mr-4"
          src={image}
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
    </div>
  );
}

type MerchandiseCardCheckoutProps = {
  name: string;
  size: string;
  quantity: number;
  image: StaticImageData;
} & React.HTMLAttributes<HTMLDivElement>;
