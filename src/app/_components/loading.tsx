import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import Typography from "@/components/typography/typography";
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
  const [longer, setLonger] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLonger(true);
    }, 7_500);

    return () => clearTimeout(timer);
  }, []);

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
        <Typography variant="p" className="text-center text-white -mt-2">
          {longer
            ? "The preparation takes longer than usual, refreshing the page or opening it on a browser might help."
            : "Please wait while we prepare the stage for you."}
        </Typography>
      </div>
    </div>
  );
}
