"use client";

import { fetchGenericDetails } from "@/api/shop";
import { DESKTOP_MIN_WIDTH } from "@/consts/size.consts";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useCartStore } from "@/store/cart";
import { ClientGenericItem } from "@/types/items";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Counter } from "@/components/counter";
import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { LoadingSelection } from "./loading-selection";

type GenericSelectionProps = {
  generic_item: ClientGenericItem;
  children: React.ReactNode;
  cartAmount: number;
  onAddToCart?: () => void;
};

type ContentProps = {
  generic_item: ClientGenericItem;
  count: number;
  setCount: (value: number) => void;
  setOpen: (value: boolean) => void;
  onAddToCart?: () => void;
  cartAmount: number;
};

function Content({
  generic_item,
  count,
  setCount,
  setOpen,
  onAddToCart,
  cartAmount,
}: ContentProps) {
  const currentCost = (generic_item?.price ?? 0) * count;

  const disableButton = count <= 0;

  const onAddToCartHandler = () => {
    onAddToCart?.();
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
                  src={generic_item.image_url ?? ""}
                  fill={true}
                  className="aspect-square object-contain"
                  alt={generic_item.name}
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
                maxValue={generic_item.max_order - cartAmount}
              />
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

export function GenericSelection({
  generic_item: orig,
  children,
  cartAmount,
}: GenericSelectionProps) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  const { addToCart } = useCartStore();
  const onAddToCart = () => {
    addToCart({
      item_id: orig.item_id,
      quantity: count,
    });
  };

  const { data: generic_item } = useQuery({
    queryKey: ["generic", orig.item_id],
    queryFn: () => fetchGenericDetails(orig.item_id),
    enabled: open,
  });

  // clear data on open
  useEffect(() => {
    if (open) {
      setCount(0);
    }
  }, [open]);

  const isDesktop = useMediaQuery(`(min-width: ${DESKTOP_MIN_WIDTH}px)`);

  const content = generic_item ? (
    <Content
      generic_item={generic_item}
      cartAmount={cartAmount}
      count={count}
      setOpen={setOpen}
      setCount={setCount}
      onAddToCart={onAddToCart}
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
