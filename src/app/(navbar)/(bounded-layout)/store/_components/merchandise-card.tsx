import Image from "next/image";

import MerchandiseDummyImage from "@/app/(navbar)/(bounded-layout)/store/_assets/merchandise-dummy-image.png";

import Typography from "@/components/typography/typography";

export function MerchandiseCard({ name, price }: MerchandiseCardProps) {
  return (
    <div className="flex flex-col gap-1">
      <Image
        src={MerchandiseDummyImage}
        alt="merchandise-dummy-image"
        className="object-cover w-full"
      />
      <Typography variant="h4">{name}</Typography>
      <Typography variant="p">
        SGD <span className="font-bold text-xl">{price}</span>
      </Typography>
    </div>
  );
}

type MerchandiseCardProps = {
  name: string;
  price: string;
};
