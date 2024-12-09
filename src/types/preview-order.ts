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

interface itemOrderPreviewCommonDetails {
  item_id: string;
  name: string;
  image_url?: string;
  quantity: number;
  item_available: boolean;

  unit_price: number;

  subtotal: number;
}

interface itemOrderPreviewCommonDetailsPromo
  extends itemOrderPreviewCommonDetails {
  old_unit_price: number;
  old_subtotal: number;
}

type itemOrderPreviewTicketDetails = {
  start_time: number;
  end_time: number;
  is_selling_fast: boolean;
};

type itemOrderPreviewClothingDetails = {
  size: string;
};

type itemOrderPreviewBundleDetails = {
  bundle_items: BundleItem[];
};

type ItemOrderPreview = (
  | itemOrderPreviewCommonDetails
  | itemOrderPreviewCommonDetailsPromo
) &
  (
    | itemOrderPreviewTicketDetails
    | itemOrderPreviewClothingDetails
    | itemOrderPreviewBundleDetails
  );

export type PreviewOrderResponse = {
  total: number;
  old_total?: number;
  promo_available: boolean;
  items: ItemOrderPreview[];
};
