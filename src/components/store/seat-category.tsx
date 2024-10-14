import catA from "@/_assets/store/seats/catA.svg";
import catB from "@/_assets/store/seats/catB.svg";
import catC from "@/_assets/store/seats/catC.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

import Typography from "@/components/typography/typography";

type SeatCategoryProps = {
  selectedCategory?: "A" | "B" | "C";
};

export function SeatCategory({ selectedCategory }: SeatCategoryProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative flex flex-col items-center w-full aspect-square">
        <div className="border-icn-grey border-2 px-2 py-1 rounded-xl">
          <Typography variant="h5" className="">
            Level 1
          </Typography>
        </div>
        <div className="flex flex-col bg-icn-grey rounded-lg mt-2 w-48 items-center justify-center">
          <Typography variant="h5" className="">
            Stage
          </Typography>
        </div>
        <Image
          src={catA}
          alt="Category A seat"
          className={cn(
            "w-40 h-40 absolute top-20 mt-2",
            selectedCategory && selectedCategory !== "A" && "opacity-50",
          )}
        />
        <Image
          src={catB}
          alt="Category B seat"
          className={cn(
            "w-56 h-56 absolute top-16 mt-2",
            selectedCategory && selectedCategory !== "B" && "opacity-50",
          )}
        />
      </div>
      <div className="relative flex flex-col items-center w-full aspect-square">
        <div className="border-icn-grey border-2 px-2 py-1 rounded-xl">
          <Typography variant="h5" className="">
            Level 2
          </Typography>
        </div>
        <div className="flex flex-col bg-icn-grey rounded-lg mt-2 w-48 items-center justify-center">
          <Typography variant="h5" className="">
            Stage
          </Typography>
        </div>
        <Image
          src={catC}
          alt="bruh"
          className={cn(
            "w-56 h-56 absolute top-16 mt-2",
            selectedCategory && selectedCategory !== "C" && "opacity-50",
          )}
        />
      </div>
    </div>
  );
}
