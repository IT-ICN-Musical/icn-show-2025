import { cn, sortSizes } from "@/lib/utils";
import { ClientBundleClothing } from "@/types/items";
import { Minus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Counter } from "@/components/counter";
import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

type ClothingContentProps = {
  clothing: ClientBundleClothing;
  option: Record<string, number>;
  setOption: (value: Record<string, number>) => void;
  maxAmount: number;
  cartAmount: Record<string, number>;
};

export function BundleClothingContent({
  clothing,
  option,
  setOption,
  maxAmount,
  cartAmount,
}: ClothingContentProps) {
  const sizes = clothing.sizes;
  const [count, setCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined,
  );

  const currentSize = clothing?.sizes?.find(
    (size) => size.size === selectedSize,
  );

  const sortedSizes = sortSizes(sizes ?? []);

  const handleSizeSelect = (size: string) => {
    if (size === selectedSize) {
      setSelectedSize(undefined);

      setCount(0);
    } else {
      // set count tto max(count, new size max order)
      const newSizeMaxOrder = clothing?.sizes?.find(
        (sizeObj) => sizeObj.size === size,
      )?.max_order;

      if (newSizeMaxOrder !== undefined && count > newSizeMaxOrder) {
        setCount(newSizeMaxOrder);
      }

      setSelectedSize(size);
    }
  };

  // max amount calculation
  const addedAmount = Object.values(option).reduce(
    (acc, value) => acc + value,
    0,
  );

  const availableQuota = maxAmount - addedAmount;

  const availableStock =
    (selectedSize && currentSize
      ? currentSize.max_order -
        option[selectedSize] -
        (cartAmount[currentSize.item_id] ?? 0)
      : undefined) ?? currentSize?.max_order;

  const maxCounterValue = availableStock
    ? Math.min(availableQuota, availableStock)
    : availableQuota;

  const handleAddItem = () => {
    if (selectedSize && count > 0) {
      const item_id = clothing.sizes?.find(
        (sizeObj) => sizeObj.size === selectedSize,
      )?.item_id;
      if (item_id) {
        setOption({
          ...option,
          [item_id]: count + (option[item_id] ?? 0),
        });
      }

      setCount(0);
    }
  };

  return (
    <>
      {/* Image */}
      <div className="w-full h-fit flex items-center justify-center py-3">
        <div className="relative w-52 h-52 rounded-2xl">
          <Image
            src={clothing.image_url ?? ""}
            fill={true}
            className="aspect-square object-contain"
            alt={clothing.name}
          />
        </div>
      </div>
      <hr className="border border-1" />
      <div className="flex flex-row w-full justify-between py-2 items-center">
        <div>
          <Typography variant="p">Number of items</Typography>
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
        <Typography variant="p">Size</Typography>
        <div className="flex flex-row gap-2 h-full items-center">
          {sortedSizes?.map((size) => (
            <Button
              key={size.size}
              variant="outline"
              onClick={() => handleSizeSelect(size.size)}
              className={cn(
                "min-w-16 rounded-full h-fit py-2 px-4 border-primary-700 font-book text-primary-700 hover:bg-primary-700 hover:border-primary-700 hover:text-neutral-50 transition-colors duration-200",
                selectedSize !== size.size &&
                  "border-neutral-100 bg-neutral-100 text-neutral-900",
              )}
            >
              {size.size}
            </Button>
          ))}
        </div>
      </div>
      <div className="py-2 w-ful flex flex-col gap-2">
        <Button
          variant="outline"
          disabled={count === 0 || selectedSize === undefined}
          onClick={handleAddItem}
        >
          Add ({availableQuota} more item{availableQuota > 1 ? "s" : ""})
        </Button>
      </div>
      {
        // only show selected options if there are any
        Object.keys(option).length > 0 && (
          <>
            <hr className="border border-1" />
            <div className="py-2 w-full flex flex-col">
              <Typography variant="p" className="mb-2">
                Selected Options
              </Typography>
              {Object.keys(option).map((key, idx) => {
                const value = option[key];
                const clothing_size = clothing.sizes?.find(
                  (size) => size.item_id === key,
                );

                const size_str = clothing_size?.size;

                const oldPrice = clothing_size?.old_price ?? 0;
                const newPrice = clothing_size?.price ?? 0;

                const onClickDelete = () => {
                  const newOptions = { ...option };
                  newOptions[key] = newOptions[key] - 1;
                  if (newOptions[key] <= 0) {
                    delete newOptions[key];
                  }
                  setOption(newOptions);
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
                        CAT {size_str} ×{value}
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
