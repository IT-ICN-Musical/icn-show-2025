"use client";

import { fetchClothingDetails } from "@/api/shop";
import { DESKTOP_MIN_WIDTH } from "@/consts/size.consts";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn, sortSizes } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { ClientClothingItem, ClientClothingSizes } from "@/types/items";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";

import { Counter } from "@/components/counter";
import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { LoadingSelection } from "./loading-selection";

type ClothingSelectionProps = {
  clothing: ClientClothingItem;
  children: React.ReactNode;
  // TODO: Add input type
  onAddToCart?: () => void;
  onBuyNow?: () => void;
};

type ContentProps = {
  clothing: ClientClothingItem;
  count: number;
  setCount: (value: number) => void;
  setOpen: (value: boolean) => void;
  handleSizeSelect: (category: string) => void;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  selectedSize: string | undefined;
  sizes: ClientClothingSizes[] | undefined;
};

function Content({
  clothing,
  count,
  setCount,
  setOpen,
  handleSizeSelect,
  onAddToCart,
  onBuyNow,
  selectedSize,
  sizes,
}: ContentProps) {
  const currentSize = clothing?.sizes?.find(
    (size) => size.size === selectedSize,
  );

  const currentCost = (currentSize?.price ?? 0) * count;
  const disableButton = selectedSize === undefined || count <= 0;

  const costString = [
    (currentCost / 100).toString(),
    (currentCost % 100).toString().padStart(2, "0"),
  ];

  const sortedSizes = sortSizes(sizes ?? []);

  const onAddToCartHandler = () => {
    onAddToCart?.();
    setOpen(false);
  };

  const onBuyNowHandler = () => {
    onBuyNow?.();
    setOpen(false);
  };

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <div className="w-full max-w-4xl ">
          <div className="px-4 pt-2 md:pt-0">
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
              </div>
              <Counter
                value={count}
                setValue={setCount}
                minValue={0}
                maxValue={currentSize?.max_order}
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
            <hr className="border border-1" />
            <div className="flex flex-row w-full justify-between py-3 items-center">
              <Typography variant="p" className="font-bold">
                Total
              </Typography>
              <div className="flex flex-row gap-2 h-full items-end">
                <Typography variant="p2" className="font-light">
                  SGD
                </Typography>
                <Typography
                  variant="p"
                  className="font-semibold leading-[1rem]"
                >
                  {costString[0]}.{costString[1]}
                </Typography>
              </div>
            </div>

            <hr className="border border-1" />
            <div className="flex flex-row gap-2 h-full items-center my-3">
              <Button
                variant="outline"
                size="lg"
                disabled={disableButton}
                className="border-primary-700 text-primary-700 font-book w-full h-fit py-[10px]"
                onClick={onAddToCartHandler}
              >
                Add to Cart
              </Button>
              <Button
                variant="default"
                size="lg"
                disabled={disableButton}
                className="border-primary-700  w-full font-semibold h-fit py-[10px]"
                onClick={onBuyNowHandler}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ClothingSelection({
  clothing: orig,
  children,
  onBuyNow,
}: ClothingSelectionProps) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    undefined,
  );

  const { addToCart } = useCartStore();
  const onAddToCart = () => {
    const size = clothing?.sizes?.find(
      (sizeObj) => sizeObj.size === selectedSize,
    );

    if (size) {
      addToCart({
        item_id: size.item_id,
        quantity: count,
      });
    }
  };

  const { data: clothing } = useQuery({
    queryKey: ["clothing", orig.clothing_id],
    queryFn: () => fetchClothingDetails(orig.clothing_id),
    enabled: open,
  });

  const sizes = clothing?.sizes?.map((size) => size);

  const isDesktop = useMediaQuery(`(min-width: ${DESKTOP_MIN_WIDTH}px)`);

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

  const content = clothing ? (
    <Content
      clothing={clothing}
      count={count}
      setOpen={setOpen}
      setCount={setCount}
      handleSizeSelect={handleSizeSelect}
      onAddToCart={onAddToCart}
      onBuyNow={onBuyNow}
      selectedSize={selectedSize}
      sizes={sizes}
    />
  ) : (
    <LoadingSelection />
  );

  if (!isDesktop) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>{content}</DrawerContent>
      </Drawer>
    );
  } else {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="min-w-[40rem]">
          <DialogTitle></DialogTitle>
          {content}
        </DialogContent>
      </Dialog>
    );
  }
}
