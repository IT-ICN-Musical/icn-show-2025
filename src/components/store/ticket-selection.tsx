"use client";

import { DESKTOP_MIN_WIDTH } from "@/consts/size.consts";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn, stringToCurrency } from "@/lib/utils";
import { ClientShowItem } from "@/types/items";
import { useState } from "react";

import { Counter } from "@/components/counter";
import { SeatCategory } from "@/components/store/seat-category";
import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";

type TicketSelectionProps = {
  show: ClientShowItem;
  children: React.ReactNode;
  // TODO: Add input type
  onAddToCart?: () => void;
  onBuyNow?: () => void;
};

type ContentProps = {
  show: ClientShowItem;
  count: number;
  setCount: (value: number) => void;
  setOpen: (value: boolean) => void;
  handleCategorySelect: (category: string) => void;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  selectedCategory: string | undefined;
  categories: string[] | undefined;
};

function Content({
  show,
  count,
  setCount,
  setOpen,
  handleCategorySelect,
  onAddToCart,
  onBuyNow,
  selectedCategory,
  categories,
}: ContentProps) {
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

  const currentCost = currentTicket?.price ?? 0 * count;

  const disableButton = selectedCategory === undefined || count <= 0;

  const costString = [
    (currentCost / 100).toString(),
    (currentCost % 100).toString().padStart(2, "0"),
  ];

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
      <div className="flex flex-col mt-6 items-center">
        <Typography variant="h4" className="font-safira-march mb-2">
          {show.name}
        </Typography>
      </div>
      <hr className="border border-1" />
      <div className="flex flex-col w-full items-center">
        <div className="w-full max-w-4xl ">
          <div className="px-4 pt-2 md:pt-0">
            <SeatCategory selectedCategory={safeCategory} />
            <hr className="border border-1" />
            <div className="flex flex-row w-full justify-between py-2 items-center">
              <div>
                <Typography variant="p">Number of pax</Typography>
                <Typography
                  variant="p2"
                  color="icn-icon-info"
                  className={cn("font-book", count % 5 < 3 && "hidden")}
                >
                  Add {5 - (count % 5)} more to get Bundle Price
                </Typography>
              </div>
              <Counter
                value={count}
                setValue={setCount}
                minValue={0}
                maxValue={currentTicket?.max_order}
              />
            </div>
            <div className="flex flex-row w-full justify-between py-2 items-center">
              <Typography variant="p">Select your CAT</Typography>
              <div className="flex flex-row gap-2 h-full items-center">
                {categories?.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    onClick={() => handleCategorySelect(category)}
                    className={cn(
                      "rounded-full h-fit py-2 px-4 border-primary-700 font-book text-primary-700 hover:bg-primary-700 hover:border-primary-700 hover:text-neutral-50 transition-colors duration-200",
                      selectedCategory !== category &&
                        "border-neutral-100 bg-neutral-100 text-neutral-900",
                    )}
                  >
                    CAT {category}
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

export function TicketSelection({
  show,
  children,
  onAddToCart,
  onBuyNow,
}: TicketSelectionProps) {
  const categories = show.tickets?.map((ticket) => ticket.category);

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined,
  );

  const isDesktop = useMediaQuery(`(min-width: ${DESKTOP_MIN_WIDTH}px)`);

  const handleCategorySelect = (category: string) => {
    if (category === selectedCategory) {
      setCount(0);
      setSelectedCategory(undefined);
    } else {
      const newCategoryMaxOrder = show.tickets?.find(
        (ticket) => ticket.category === category,
      )?.max_order;
      if (newCategoryMaxOrder !== undefined && count > newCategoryMaxOrder) {
        setCount(newCategoryMaxOrder);
      }

      setSelectedCategory(category);
    }
  };

  const content = (
    <Content
      show={show}
      count={count}
      setOpen={setOpen}
      setCount={setCount}
      handleCategorySelect={handleCategorySelect}
      onAddToCart={onAddToCart}
      onBuyNow={onBuyNow}
      selectedCategory={selectedCategory}
      categories={categories}
    />
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
