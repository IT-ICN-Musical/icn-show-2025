"use client";

import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { ClientBundleShow } from "@/types/items";
import { Minus } from "lucide-react";
import { useState } from "react";

import { Counter } from "@/components/counter";
import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

import { SeatCategory } from "../seat-category";

type BundletTicketContentProps = {
  show: ClientBundleShow;
  maxAmount: number;
  options: Record<string, number>;
  setOptions: (value: Record<string, number>) => void;
};

export function BundleTicketContent({
  show,
  maxAmount,
  options,
  setOptions,
}: BundletTicketContentProps) {
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );

  const categories = show?.tickets?.map((ticket) => ticket.category);
  const handleCategorySelect = (category: string) => {
    if (category === selectedCategory) {
      setCount(0);
      setSelectedCategory(undefined);
    } else {
      const newCategoryMaxOrder = show?.tickets?.find(
        (ticket) => ticket.category === category,
      )?.max_order;
      if (newCategoryMaxOrder !== undefined && count > newCategoryMaxOrder) {
        setCount(newCategoryMaxOrder);
      }

      setSelectedCategory(category);
    }
  };

  const safeCategory: "A" | "B" | "C" | undefined = (() => {
    if (
      selectedCategory === "A" ||
      selectedCategory === "B" ||
      selectedCategory === "C"
    ) {
      return selectedCategory;
    }
    return undefined;
  })();

  const currentTicket = show.tickets?.find(
    (ticket) => ticket.category === safeCategory,
  );

  // max amount calculation
  const addedAmount = Object.values(options).reduce(
    (acc, value) => acc + value,
    0,
  );

  const availableQuota = maxAmount - addedAmount;

  const availableStock =
    (safeCategory && currentTicket
      ? currentTicket.max_order - (options[safeCategory] ?? 0)
      : undefined) ?? currentTicket?.max_order;

  const maxCounterValue = Math.min(availableStock ?? 999, availableQuota);

  const handleAddItem = () => {
    if (safeCategory && count > 0) {
      const ticket_item_id = show.tickets?.find(
        (ticket) => ticket.category === safeCategory,
      )?.item_id;

      if (ticket_item_id) {
        setOptions({
          ...options,
          [ticket_item_id]: count + (options[ticket_item_id] ?? 0),
        });
      }
      setCount(0);
    }
  };

  return (
    <>
      <div className="flex justify-center w-full py-2">
        <Typography variant="h3">{show.name}</Typography>
      </div>

      <hr className="border border-1 mb-2 " />
      <SeatCategory selectedCategory={safeCategory} />
      <hr className="border border-1" />
      <div className="flex flex-row w-full justify-between py-2 items-center">
        <div>
          <Typography variant="p">Number of pax</Typography>
          <Typography variant="p2" color="icn-icon-info" className="font-book">
            Maximum Amount: {maxAmount - addedAmount}
          </Typography>
        </div>
        <Counter
          value={count}
          setValue={setCount}
          minValue={0}
          maxValue={maxCounterValue}
        />
      </div>
      <div className="flex flex-row w-full justify-between py-2 items-center">
        <Typography variant="p">Select your CAT</Typography>
        <div className="flex flex-row gap-2 h-full items-center">
          {(show.tickets ?? [])
            .sort((a, b) => (a.category < b.category ? -1 : 1))
            .map((cat, idx) => (
              <Button
                key={idx}
                variant="outline"
                onClick={() => handleCategorySelect(cat.category)}
                disabled={cat.max_order <= 0}
                className={cn(
                  "rounded-full h-fit py-2 px-4 border-primary-700 font-book text-primary-700 transition-colors duration-200",
                  selectedCategory !== cat.category &&
                    "border-neutral-100 bg-neutral-100 text-neutral-900",
                  cat.max_order <= 0
                    ? "cursor-not-allowed opacity-25 line-through"
                    : "hover:bg-primary-700 hover:border-primary-700 hover:text-neutral-50",
                )}
              >
                CAT {cat.category}
              </Button>
            ))}
        </div>
      </div>
      <div className="py-2 w-ful flex flex-col gap-2">
        <Button
          variant="outline"
          disabled={count === 0 || selectedCategory === undefined}
          onClick={handleAddItem}
        >
          Add ({availableQuota} more item{availableQuota > 1 ? "s" : ""})
        </Button>
      </div>
      {
        // only show selected options if there are any
        Object.keys(options).length > 0 && (
          <>
            <hr className="border border-1" />
            <div className="py-2 w-full flex flex-col">
              <Typography variant="p" className="mb-2">
                Selected Options
              </Typography>
              {Object.keys(options).map((key, idx) => {
                const value = options[key];
                const ticket = show.tickets?.find(
                  (ticket) => ticket.item_id === key,
                );

                const CAT = ticket?.category ?? "";

                const oldPrice = ticket?.old_price ?? 0;
                const newPrice = ticket?.price ?? 0;

                const onClickDelete = () => {
                  const newOptions = { ...options };
                  newOptions[key] = newOptions[key] - 1;
                  if (newOptions[key] <= 0) {
                    delete newOptions[key];
                  }
                  setOptions(newOptions);
                };

                return (
                  <div className="w-full flex gap-2 px-4" key={idx}>
                    <Button
                      className="px-2"
                      variant="outline"
                      onClick={onClickDelete}
                    >
                      <Minus />
                    </Button>
                    <div className="flex justify-between py-2 flex-grow items-center">
                      <Typography variant="p" className="font-light">
                        CAT {CAT} ×{value}
                      </Typography>
                      <div className="flex flex-row gap-2 h-full items-end items-center">
                        <Typography variant="p2" className="font-light">
                          SGD
                        </Typography>
                        {oldPrice !== newPrice && (
                          <Typography
                            variant="p"
                            className="font-semibold leading-[1rem] text-rose-500"
                          >
                            {((value * newPrice) / 100).toFixed(2)}
                          </Typography>
                        )}
                        <Typography
                          variant="p"
                          className={cn(
                            "font-semibold leading-[1rem]",
                            oldPrice !== newPrice &&
                              "text-gray-600 line-through",
                          )}
                        >
                          {((value * oldPrice) / 100).toFixed(2)}
                        </Typography>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )
      }
      <hr className="border border-1" />
    </>
  );
}
