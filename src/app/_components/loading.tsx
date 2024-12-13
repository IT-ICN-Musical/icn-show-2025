import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { Progress } from "@/components/ui/progress";

import Senjakala from "../_assets/senjakala.webp";

type LoadingPageProps = {
  currentValue: number;
  maxValue: number;
  finished: boolean;
};

export function LoadingPage({
  currentValue,
  maxValue,
  finished,
}: LoadingPageProps) {
  const perc = (currentValue / maxValue) * 100;

  return (
    <div
      className={cn(
        "flex items-center justify-center fixed bg-secondary-950 w-screen h-screen z-[999] transition-opacity duration-500",
        finished && "opacity-0",
      )}
    >
      <div className="flex flex-col w-full max-w-md px-6 gap-8">
        <img
          src={Senjakala.src}
          alt="Senjakala"
          className="w-full h-64 object-contain animate-pulse"
        />
        <Progress value={perc} className="w-full" />
      </div>
    </div>
  );
}
