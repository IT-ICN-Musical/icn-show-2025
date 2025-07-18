"use client";

import { fetchClothingDetails } from "@/api/shop";
import { SPECIAL_CLOTHING_CATEGORY } from "@/consts/settings.consts";
import { DESKTOP_MIN_WIDTH } from "@/consts/size.consts";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn, sortSizes } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { ClientClothingItem, ClientClothingSizes } from "@/types/items";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import { Info } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import clothing_sizes from "@/components/clothing_sizes";
import { Counter } from "@/components/counter";
import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { LoadingSelection } from "./loading-selection";

type ClothingSelectionProps = {
  clothing: ClientClothingItem;
  children: React.ReactNode;
  // TODO: Add input type
  cartAmount: Record<string, number>;
  onAddToCart?: () => void;
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
  cartAmount: Record<string, number>;
};

function Content({
  clothing,
  count,
  setCount,
  setOpen,
  handleSizeSelect,
  onAddToCart,
  selectedSize,
  sizes,
  cartAmount,
}: ContentProps) {
  const currentSize = clothing?.sizes?.find(
    (size) => size.size === selectedSize,
  );

  const currentCost = (currentSize?.price ?? 0) * count;
  const disableButton = selectedSize === undefined || count <= 0;

  const isSpecialClothingType = SPECIAL_CLOTHING_CATEGORY.includes(
    clothing.clothing_id,
  );

  const ClothingSizeChart = clothing_sizes[clothing.clothing_id];

  const sortedSizes = sortSizes(sizes ?? []);

  const onAddToCartHandler = () => {
    onAddToCart?.();
    setOpen(false);
  };

  const maxAmount = currentSize
    ? currentSize?.max_order - (cartAmount[currentSize?.item_id] ?? 0)
    : undefined;

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
            <div className="flex flex-row w-full justify-between py-2 items-center gap-16">
              <div>
                <Typography variant="p">Number of items</Typography>
              </div>
              <Counter
                value={count}
                setValue={setCount}
                minValue={0}
                maxValue={maxAmount}
              />
            </div>
            <div className="flex flex-row w-full justify-between py-2 items-center gap-16">
              {isSpecialClothingType ? (
                <Typography variant="p">Type</Typography>
              ) : (
                <span className="flex flex-row items-center gap-2">
                  <Typography variant="p">Size</Typography>
                  {ClothingSizeChart !== undefined && (
                    <Popover>
                      <PopoverTrigger>
                        <Button variant="ghost" className="px-0 py-0">
                          <Info size={18} />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-fit bg-white/80 backdrop-blur-xl max-w-[100vw] overflow-x-auto">
                        <ClothingSizeChart />
                      </PopoverContent>
                    </Popover>
                  )}
                </span>
              )}

              <div className="flex flex-row gap-2 h-full items-center overflow-x-auto max-w-[450px]">
                {sortedSizes?.map((size) => (
                  <Button
                    key={size.size}
                    variant="outline"
                    onClick={() => handleSizeSelect(size.size)}
                    disabled={size.max_order === 0}
                    className={cn(
                      "min-w-16 rounded-full h-fit py-2 px-4 border-primary-700 font-book text-primary-700 transition-colors duration-200",
                      selectedSize !== size.size &&
                        "border-neutral-100 bg-neutral-100 text-neutral-900",
                      size.max_order === 0
                        ? "cursor-not-allowed opacity-25 line-through"
                        : "hover:bg-primary-700 hover:border-primary-700 hover:text-neutral-50",
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
                  {(currentCost / 100).toFixed(2)}
                </Typography>
              </div>
            </div>

            <hr className="border border-1" />

            <div className="flex flex-row gap-2 h-full items-center my-3">
              <Button
                size="lg"
                disabled={disableButton}
                className="font-book w-full h-fit py-[10px]"
                onClick={onAddToCartHandler}
              >
                Add to Cart
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
  cartAmount,
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

  // clear data on open
  useEffect(() => {
    if (open) {
      setCount(0);
      setSelectedSize(undefined);
    }
  }, [open]);

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
      cartAmount={cartAmount}
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
