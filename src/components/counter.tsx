import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

import Typography from "./typography/typography";
import { Button } from "./ui/button";

interface CounterProps {
  value: number;
  setValue: (value: number) => void;
  maxValue?: number;
  minValue?: number;
}

export function Counter({ value, setValue, maxValue, minValue }: CounterProps) {
  const incrementHandler = () => {
    if (maxValue !== undefined && value >= maxValue) return;
    setValue(value + 1);
  };

  const decrementHandler = () => {
    if (minValue !== undefined && value <= minValue) return;
    setValue(value - 1);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-4 border-icn-grey border-2 p-1 rounded-xl min-w-[120px]">
      <Button
        variant="outline"
        className={cn(
          "bg-icn-grey w-8 aspect-square p-0",
          minValue !== undefined && value <= minValue && "opacity-50",
        )}
        disabled={minValue !== undefined ? value <= minValue : false}
        onClick={decrementHandler}
      >
        <Minus className="w-4" />
      </Button>

      <div className="">
        <Typography variant="p">{value ?? 0}</Typography>
      </div>
      <Button
        variant="outline"
        className={cn(
          "bg-icn-grey w-8 aspect-square p-0",
          maxValue !== undefined && value >= maxValue && "opacity-50",
        )}
        disabled={maxValue !== undefined ? value >= maxValue : false}
        onClick={incrementHandler}
      >
        <Plus className="w-4" />
      </Button>
    </div>
  );
}
