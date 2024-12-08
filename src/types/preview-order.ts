import { CheckoutItemOrderRequest } from "./checkout";

export type PreviewOrderRequest = {
  promo_code?: string;
  items: CheckoutItemOrderRequest[]; // Note: orderDto.ItemOrderRequest needs to be defined separately
};

type BundleItem = {
  item_id: string;
  name: string;
  quantity: number;
};

type ItemOrderPreview = {
  item_id: string;

  name: string;
  image_url?: string;
  quantity: number;
  item_available: boolean;
  old_unit_price?: number;
  unit_price: number;
  subtotal: number;
} & (
  | {
      // Ticket additional details
      start_time?: number; // epoch timestamp
      end_time?: number; // epoch timestamp
      is_selling_fast?: boolean;
    }
  | {
      // Clothing additional details
      size?: string;
    }
  | {
      bundle_items?: BundleItem[];
    }
);

export type PreviewOrderResponse = {
  total: number;
  promo_available: boolean;
  items: ItemOrderPreview[];
};
