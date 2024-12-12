"use client";

import { fetchBundleDetails } from "@/api/shop";
import { DESKTOP_MIN_WIDTH } from "@/consts/size.consts";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useCartStore } from "@/store/cart";
import {
  ClientBundleClothing,
  ClientBundleClothingSize,
  ClientBundleDetail,
  ClientBundleItem,
  ClientClothingItem,
  ClientClothingSizes,
  ClientShowItem,
} from "@/types/items";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { Counter } from "@/components/counter";
import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { BundleClothingContent } from "./bundles/bundle-clothing-content";
import { ConfirmationPage } from "./bundles/bundle-confirmation-page";
import { BundleTicketContent } from "./bundles/bundle-ticket-content";
import { LoadingSelection } from "./loading-selection";
import { SeatCategory } from "./seat-category";

type BundleSelectionProps = {
  bundle: ClientBundleItem;
  children: React.ReactNode;
  // TODO: Add input type
  onAddToCart?: () => void;
  onBuyNow?: () => void;
};

type ContentProps = {
  bundle: ClientBundleItem;
  setOpen: (value: boolean) => void;
  bundleOptions?: Record<string, number>[];
  setBundleOptions: (value: Record<string, number>[]) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
};

export type BundleSelection = {
  item_id?: string;
  quantity: number;
};

function PageNavigation({
  page,
  setPage,
  lastPage, // if page == last page, use add to cart
  disableNext,
  onAddToCart,
  hidePrevious,
}: {
  page: number;
  setPage: (value: number) => void;
  lastPage: number;
  disableNext: boolean;
  onAddToCart: () => void;
  hidePrevious?: boolean;
}) {
  const disablePrevious = page <= 0;

  const onClickNext = () => {
    if (page == lastPage) {
      onAddToCart();
    } else {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex flex-row gap-2 h-full items-center my-3">
      {!hidePrevious && (
        <Button
          variant="outline"
          size="lg"
          disabled={disablePrevious}
          className="border-primary-700 text-primary-700 font-book w-full h-fit py-[10px]"
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
      )}
      <Button
        variant="default"
        size="lg"
        disabled={disableNext}
        className="border-primary-700  w-full font-semibold h-fit py-[10px]"
        onClick={onClickNext}
      >
        {page == lastPage ? "Add to Cart" : "Next"}
      </Button>
    </div>
  );
}

const generateContent = ({
  curItem,
  currentPage,
  bundleOptions,
  setBundleOptions,
}: {
  curItem?: ClientBundleDetail;
  currentPage: number;

  bundleOptions: Record<string, number>[];
  setBundleOptions: (value: Record<string, number>[]) => void;
}) => {
  if (curItem?.clothing) {
    const option = bundleOptions[currentPage];
    const setOption = (value: Record<string, number>) => {
      setBundleOptions([
        ...bundleOptions.slice(0, currentPage),
        value,
        ...bundleOptions.slice(currentPage + 1),
      ]);
    };

    return (
      <BundleClothingContent
        clothing={curItem.clothing}
        option={option}
        setOption={setOption}
        maxAmount={curItem.amount}
      />
    );
  } else if (curItem?.show) {
    const option = bundleOptions[currentPage];
    const setOption = (value: Record<string, number>) => {
      setBundleOptions([
        ...bundleOptions.slice(0, currentPage),
        value,
        ...bundleOptions.slice(currentPage + 1),
      ]);
    };

    return (
      <BundleTicketContent
        show={curItem.show}
        options={option}
        setOptions={setOption}
        maxAmount={curItem.amount}
      />
    );
  }

  return <></>;
};

function Content({
  bundle,
  setOpen,
  bundleOptions,
  setBundleOptions,
  currentPage,
  setCurrentPage,
}: ContentProps) {
  const { addToCart } = useCartStore();
  // current item_id is not undefined and quantity is not 0

  const bundleItems = bundle?.items?.filter((item) => {
    return item.clothing || item.show;
  });

  // only enable next if total sum in bundleOptions[currentPage] is equal to curItem.amount

  const generateContentFn = useCallback(() => {
    if (bundleItems && bundleOptions) {
      return generateContent({
        curItem: bundleItems[currentPage],
        currentPage,
        bundleOptions,
        setBundleOptions,
      });
    }
  }, [bundleItems, currentPage, bundleOptions, setBundleOptions]);

  if (!bundleItems || !bundleOptions) {
    return undefined;
  }
  const curItem = bundleItems[currentPage];

  const enableNext =
    currentPage == bundleItems.length ||
    curItem?.amount ==
      Object.values(bundleOptions[currentPage]).reduce(
        (acc, value) => acc + value,
        0,
      );

  const content =
    currentPage == bundleItems?.length ? (
      <ConfirmationPage bundle={bundle} bundleOptions={bundleOptions} />
    ) : (
      generateContentFn()
    );

  const handleAddToCart = () => {
    if (bundleItems) {
      const finalBundleOptionsRecords = bundleOptions.reduce((a, c) => {
        Object.entries(c).forEach(([key, value]) => {
          a[key] = (a[key] || 0) + value;
        });
        return a;
      }, {});

      const finalBundleOption = Object.entries(finalBundleOptionsRecords).map(
        ([key, value]) => ({
          item_id: key,
          quantity: value,
        }),
      );

      setOpen(false);

      addToCart({
        item_id: bundle.item_id,
        quantity: 1,
        bundle_option: finalBundleOption,
      });
    }
  };

  return (
    <>
      <div className="flex flex-col mt-6 items-center">
        <Typography variant="h5" className="font-safira-march mb-2">
          {bundle.name}
        </Typography>
      </div>
      <hr className="border border-1" />
      <div className="flex flex-col w-full items-center">
        <div className="w-full max-w-4xl ">
          <div className="px-4 pt-2 md:pt-0 overflow-y-auto">
            <div className="w-full">{content}</div>

            <hr className="border border-1" />
            {bundleItems && (
              <PageNavigation
                page={currentPage}
                setPage={setCurrentPage}
                lastPage={bundleItems.length}
                disableNext={!enableNext}
                onAddToCart={handleAddToCart}
                hidePrevious={currentPage == 0}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export function BundleSelection({
  bundle: orig,
  children,
}: BundleSelectionProps) {
  const [open, setOpen] = useState(false);
  const [bundleOptions, setBundleOptions] =
    useState<Record<string, number>[]>();
  const [currentPage, setCurrentPage] = useState(0);

  const { data: bundleData } = useQuery({
    queryFn: () => fetchBundleDetails(orig.item_id),
    queryKey: ["bundle", orig.item_id],
    enabled: open,
  });

  const isDesktop = useMediaQuery(`(min-width: ${DESKTOP_MIN_WIDTH}px)`);

  useEffect(() => {
    if (bundleData && open) {
      // an array of empty arrays with size of bundleItems
      const bundleItems = bundleData?.items?.filter((item) => {
        return item.clothing || item.show;
      });
      setBundleOptions(new Array(bundleItems?.length ?? 0).fill({}));
      setCurrentPage(0);
    }
  }, [JSON.stringify(bundleData), open]);

  const content = bundleData ? (
    <Content
      bundle={bundleData}
      setOpen={setOpen}
      bundleOptions={bundleOptions}
      setBundleOptions={setBundleOptions}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
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
        <DialogContent className="min-w-[40rem] max-h-screen overflow-y-auto">
          <DialogTitle></DialogTitle>
          {content}
        </DialogContent>
      </Dialog>
    );
  }
}
