import { CheckoutItemOrderRequest } from "./checkout";

type BundleItem = {
  itemId: string;
  name: string;
  quantity: number;
};

type ItemOrderPreview = {
  itemId: string;
  bundleItems?: BundleItem[];
  name: string;
  imageUrl?: string;
  quantity: number;
  itemAvailable: boolean;
  oldUnitPrice?: number;
  unitPrice: number;
  subtotal: number;
};

export type PreviewOrderRequest = {
  promo_code?: string;
  items: CheckoutItemOrderRequest[];
};

export type PreviewOrderResponse = {
  total: number;
  promoAvailable: boolean;
  items: ItemOrderPreview[];
};
