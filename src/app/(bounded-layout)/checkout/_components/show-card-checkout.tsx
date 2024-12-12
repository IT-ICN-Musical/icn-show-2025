import { Clock12, Ticket, Trash } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function ShowCardCheckout({
  name,
  time,
  quantity,
  image,
  onDelete,
}: ShowCardCheckoutProps) {
  return (
    <div className="px-2 w-full mb-2">
      <div className="relative flex w-full">
        <div className="z-10 flex flex-row h-[88px] mx-4 w-full gap-3 p-3 bg-white border-t-[0.75px] border-b-[0.75px] border-[#E4E4E7] items-center">
          <Image
            className="w-16 h-16 rounded-sm mr-1"
            src={image}
            width={64}
            height={64}
            alt="ticket image"
          />
          <div>
            <p className="text-sm font-mont font-medium">{name}</p>
            <div className="flex flex-row items-center">
              <Clock12 strokeWidth={2} className="w-4" color="#71717A" />
              <p className="font-mont text-xs font-normal ml-1 text-zinc-500">
                {time}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <Ticket strokeWidth={2} className="w-4" color="#71717A" />
              <p className="font-mont text-xs font-normal ml-1 text-zinc-500">
                x {quantity}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute z-0 w-full h-[124px] flex justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="88"
            viewBox="0 0.5 45 124"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 1C4.58172 1 1 4.58172 1 9V56.5484C4.31371 56.5484 7 59.213 7 62.5C7 65.787 4.31371 68.4516 1 68.4516V116C1 120.418 4.58172 124 9 124H44V1H9Z"
              fill="white"
            />
            <path
              d="M1 56.5484H0.5V57.0484H1V56.5484ZM1 68.4516V67.9516H0.5V68.4516H1ZM44 124V124.5H44.5V124H44ZM44 1H44.5V0.5H44V1ZM1.5 9C1.5 4.85786 4.85786 1.5 9 1.5V0.5C4.30558 0.5 0.5 4.30558 0.5 9H1.5ZM1.5 56.5484V9H0.5V56.5484H1.5ZM1 57.0484C4.04139 57.0484 6.5 59.493 6.5 62.5H7.5C7.5 58.9331 4.58603 56.0484 1 56.0484V57.0484ZM6.5 62.5C6.5 65.5071 4.04139 67.9516 1 67.9516V68.9516C4.58603 68.9516 7.5 66.067 7.5 62.5H6.5ZM1.5 116V68.4516H0.5V116H1.5ZM9 123.5C4.85787 123.5 1.5 120.142 1.5 116H0.5C0.5 120.694 4.30558 124.5 9 124.5V123.5ZM44 123.5H9V124.5H44V123.5ZM43.5 1V124H44.5V1H43.5ZM9 1.5H44V0.5H9V1.5Z"
              fill="#E4E4E7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="88"
            viewBox="0 0.5 45 124"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36 124C40.4183 124 44 120.418 44 116L44 68.4516C40.6863 68.4516 38 65.787 38 62.5C38 59.213 40.6863 56.5484 44 56.5484L44 9C44 4.58172 40.4183 1 36 0.999999L1.00001 0.999996L1 124L36 124Z"
              fill="white"
            />
            <path
              d="M44 68.4516L44.5 68.4516L44.5 67.9516L44 67.9516L44 68.4516ZM44 56.5484L44 57.0484L44.5 57.0484L44.5 56.5484L44 56.5484ZM1.00001 0.999996L1.00001 0.499996L0.500011 0.499996L0.500011 0.999996L1.00001 0.999996ZM1 124L0.5 124L0.5 124.5L1 124.5L1 124ZM43.5 116C43.5 120.142 40.1421 123.5 36 123.5L36 124.5C40.6944 124.5 44.5 120.694 44.5 116L43.5 116ZM43.5 68.4516L43.5 116L44.5 116L44.5 68.4516L43.5 68.4516ZM44 67.9516C40.9586 67.9516 38.5 65.507 38.5 62.5L37.5 62.5C37.5 66.0669 40.414 68.9516 44 68.9516L44 67.9516ZM38.5 62.5C38.5 59.4929 40.9586 57.0484 44 57.0484L44 56.0484C40.414 56.0484 37.5 58.933 37.5 62.5L38.5 62.5ZM43.5 9L43.5 56.5484L44.5 56.5484L44.5 9L43.5 9ZM36 1.5C40.1421 1.5 43.5 4.85786 43.5 9L44.5 9C44.5 4.30558 40.6944 0.5 36 0.499999L36 1.5ZM1.00001 1.5L36 1.5L36 0.499999L1.00001 0.499996L1.00001 1.5ZM1.5 124L1.50001 0.999996L0.500011 0.999996L0.5 124L1.5 124ZM36 123.5L1 123.5L1 124.5L36 124.5L36 123.5Z"
              fill="#E4E4E7"
            />
          </svg>
        </div>
        <Button
          className="absolute right-[32px] top-2/4 -translate-y-2/4 z-20 w-fit px-2 py-2 aspect-square"
          variant="destructive"
          size="sm"
          type="button"
          onClick={onDelete}
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
}

type ShowCardCheckoutProps = {
  name: string;
  time: string;
  quantity: number;
  image: string;
  onDelete?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;
