import { cn } from "@/lib/utils";
import { ClientBundleItem } from "@/types/items";
import { Minus } from "lucide-react";

import Typography from "@/components/typography/typography";
import { Button } from "@/components/ui/button";

type ConfirmationPageProps = {
  bundle: ClientBundleItem;
  bundleOptions: Array<Record<string, number>>;
};

function ItemComponent({
  name,
  quantity,
  oldPrice,
  newPrice,
}: {
  name: string;
  quantity: number;
  oldPrice: number;
  newPrice: number;
}) {
  return (
    <>
      <div className="flex justify-between py-2 flex-grow items-center">
        <Typography variant="p" className="font-light">
          {name} ×{quantity}
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
              {((quantity * newPrice) / 100).toFixed(2)}
            </Typography>
          )}
          <Typography
            variant="p"
            className={cn(
              "font-semibold leading-[1rem]",
              oldPrice !== newPrice && "text-gray-600 line-through",
            )}
          >
            {((quantity * oldPrice) / 100).toFixed(2)}
          </Typography>
        </div>
      </div>
    </>
  );
}

export function ConfirmationPage({
  bundle,
  bundleOptions,
}: ConfirmationPageProps) {
  const staticItems = bundle.items?.filter((item) => item.generic_item) ?? [];
  const dynamicItems =
    bundle.items?.filter((item) => item.clothing || item.show) ?? [];

  const totalCost =
    staticItems.reduce((acc, item) => {
      return acc + item.amount * (item.generic_item?.price ?? 0);
    }, 0) +
    dynamicItems.reduce((acc, item, idx) => {
      return (
        acc +
        Object.entries(bundleOptions[idx]).reduce((acc, [key, value]) => {
          const [oldPrice, newPrice] = (() => {
            if (item.clothing) {
              const clothing_size = item.clothing.sizes?.find(
                (size) => size.item_id === key,
              );
              return [clothing_size?.old_price ?? 0, clothing_size?.price ?? 0];
            } else if (item.show) {
              const ticket = item.show.tickets?.find(
                (ticket) => ticket.item_id === key,
              );
              return [ticket?.old_price ?? 0, ticket?.price ?? 0];
            }
            return [0, 0];
          })();
          return acc + value * newPrice;
        }, 0)
      );
    }, 0);

  // match each option
  return (
    <div className="flex flex-col min-h-[160px] justify-end">
      <div className="flex justify-center mb-3">
        <Typography variant="h3" className="font-book">
          Confirmation
        </Typography>
      </div>
      <hr className="border border-1" />

      <div className="flex flex-col">
        {dynamicItems.map((item, idx) => {
          // for each item in option
          const option = bundleOptions[idx];
          return (
            <>
              {Object.entries(option).map(([key, value], idx) => {
                const [name, oldPrice, newPrice] = (() => {
                  if (item.clothing) {
                    const clothing_size = item.clothing.sizes?.find(
                      (size) => size.item_id === key,
                    );
                    const name = item.clothing.name + ` ${clothing_size?.size}`;
                    return [
                      name,
                      clothing_size?.old_price ?? 0,
                      clothing_size?.price ?? 0,
                    ];
                  } else if (item.show) {
                    const ticket = item.show.tickets?.find(
                      (ticket) => ticket.item_id === key,
                    );
                    const name = item.show.name + ` (CAT ${ticket?.category})`;
                    return [name, ticket?.old_price ?? 0, ticket?.price ?? 0];
                  }
                  return ["", 0, 0];
                })();

                return (
                  <ItemComponent
                    key={idx}
                    name={name}
                    quantity={value}
                    oldPrice={oldPrice}
                    newPrice={newPrice}
                  />
                );
              })}
            </>
          );
        })}
        {staticItems.map((item, idx) => {
          return (
            <ItemComponent
              key={idx}
              name={item.generic_item?.name ?? ""}
              quantity={item.amount}
              oldPrice={item.generic_item?.old_price ?? 0}
              newPrice={item.generic_item?.price ?? 0}
            />
          );
        })}
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
          <Typography variant="p" className="font-semibold leading-[1rem]">
            {(totalCost / 100).toFixed(2)}
          </Typography>
        </div>
      </div>
    </div>
  );
}
