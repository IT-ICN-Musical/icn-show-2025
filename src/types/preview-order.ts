import { CheckoutItemOrderRequest } from "./checkout";

export type PreviewOrderRequest = {
  promo_code?: string;
  items: CheckoutItemOrderRequest[]; // Note: orderDto.ItemOrderRequest needs to be defined separately
};

type BundleItem = {
  item_id: string;
  name: string;
  quantity: number;
  with_viewers?: true;
};

type itemOrderPreviewCommonDetails = {
  item_id: string;
  name: string;
  image_url?: string;
  quantity: number;
  item_available: boolean;

  unit_price: number;

  subtotal: number;

  old_unit_price?: number;
  old_subtotal?: number;
};

type itemOrderAdditionalDetails = {
  // ticket
  start_time?: number;
  end_time?: number;
  is_selling_fast?: boolean;
  with_viewers?: true;

  // clothing
  size?: string;

  // bundle
  bundle_items?: BundleItem[];
};

export type ItemOrderPreview = itemOrderPreviewCommonDetails &
  itemOrderAdditionalDetails;

export type PreviewOrderResponse = {
  total: number;
  old_total?: number;
  promo_available: boolean;
  items?: ItemOrderPreview[];
};
