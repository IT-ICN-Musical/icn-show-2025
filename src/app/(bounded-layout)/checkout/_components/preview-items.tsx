import { formatTimeRange } from "@/lib/time";
import { ItemOrderPreview, PreviewOrderResponse } from "@/types/preview-order";

import { GenericCardCheckout } from "./generic-card-checkout";
import { MerchandiseCardCheckout } from "./merchandise-card-checkout";
import { ShowCardCheckout } from "./show-card-checkout";

export function PreviewItems({
  orderPreview,
  removeFromCart,
}: {
  orderPreview: PreviewOrderResponse;
  removeFromCart: (index: number) => void;
}) {
  const indexedOrderPreview = orderPreview?.items?.map((item, index) => {
    return { ...item, index };
  });

  const isMerchandise = (item: ItemOrderPreview) => "size" in item;
  const ticketItems = (indexedOrderPreview ?? []).filter(
    (item) => !isMerchandise(item),
  );
  const isTicketItem = (
    item: ItemOrderPreview,
  ): item is ItemOrderPreview & {
    start_time?: number;
    end_time?: number;
    is_selling_fast?: boolean;
  } => !("size" in item);
  const merchItems = (indexedOrderPreview ?? []).filter((item) =>
    isMerchandise(item),
  );

  const isMerchandiseItem = (
    item: ItemOrderPreview,
  ): item is ItemOrderPreview & {
    size?: string;
  } => "size" in item;

  return (
    <>
      {ticketItems.map((item, index) => {
        const hasValidTime =
          isTicketItem(item) && item.start_time && item.end_time;

        const onDelete = () => removeFromCart(item.index);

        if (hasValidTime) {
          const startTime = new Date((item.start_time ?? 0) / 1_000_000);
          const endTime = new Date((item.end_time ?? 0) / 1_000_000);

          return (
            <div key={`ticket-${index}`}>
              <ShowCardCheckout
                name={item.name}
                time={formatTimeRange(startTime, endTime)}
                quantity={item.quantity}
                image={item.image_url ?? ""}
                isAvailable={item.item_available}
                onDelete={onDelete}
              />
            </div>
          );
        }

        return (
          <div key={`generic-${index}`} className="px-4">
            <GenericCardCheckout
              name={item.name}
              quantity={item.quantity}
              image={item.image_url ?? ""}
              isAvailable={item.item_available}
              onDelete={onDelete}
            />
          </div>
        );
      })}
      {merchItems.map((item, index) => (
        <div key={index} className="px-4">
          <MerchandiseCardCheckout
            name={item.name}
            size={
              isMerchandiseItem(item) && item.size
                ? item.size
                : "Size not available"
            }
            isAvailable={item.item_available}
            quantity={item.quantity}
            image={item.image_url ?? ""}
            onDelete={() => removeFromCart(item.index)}
          />
        </div>
      ))}
    </>
  );
}
