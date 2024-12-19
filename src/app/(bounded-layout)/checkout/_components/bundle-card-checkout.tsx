"use client";

import { cn } from "@/lib/utils";
import { BundleItem } from "@/types/preview-order";
import { Ban, Box, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function BundleCardCheckout({
  name,
  quantity,
  image,
  onDelete,
  isAvailable,
  bundleItems,
}: BundleCardCheckoutProps) {
  const [open, setOpen] = useState<boolean>(false);
  console.log("bundleItems", bundleItems);
  return (
    <>
      <Accordion collapsible type="single" className="mb-2">
        <AccordionItem
          className="border-[#E4E4E7] border-[0.75px] bg-white rounded-lg"
          value={name}
        >
          <div className="relative">
            <AccordionTrigger className="w-full py-0 rounded-lg data-[state=open]:rounded-b-none">
              <div
                className="cursor-pointer relative p-4 flex flex-row h-[88px] items-center w-full"
                onClick={() => setOpen(!open)}
              >
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
              </div>
            </AccordionTrigger>
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
          <AccordionContent asChild={true} className="border-none pb-0">
            <div
              className={cn(
                "bg-white overflow-hidden transition-[max-height] duration-250 border-[#E4E4E7] border-t-[0.75px] p-4 rounded-b-lg",
              )}
            >
              {(bundleItems ?? []).map((item, index) => (
                <div key={index} className="flex flex-row justify-between">
                  <p className="text-sm font-mont font-normal my-1">
                    {item.name} x {item.quantity}
                  </p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

type BundleCardCheckoutProps = {
  name: string;
  quantity: number;
  image: string;
  isAvailable: boolean;
  onDelete?: () => void;
  bundleItems?: BundleItem[];
} & React.HTMLAttributes<HTMLDivElement>;
