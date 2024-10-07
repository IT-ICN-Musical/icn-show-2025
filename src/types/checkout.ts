type UUID = string;

type CheckoutTicketOption = {
  name: string;
};

type CheckoutBundleOption = {
  show_id: UUID;
  ticket_optiona: CheckoutTicketOption[];
  item_id: UUID;
  quantity: number;
} & {
  clothing_id: UUID;
  item_id: UUID;
  quantity: number;
};

type CheckoutItemOrderRequest = {
  item_id: UUID;
  quantity: number;
  ticket_option?: CheckoutTicketOption[];
} & {
  bundle_id: UUID;
  quantity: number;
  bundle_option: CheckoutBundleOption[];
};

export type CheckoutRequest = {
  buyer_email: string;
  buyer_name: string;
  promo_code?: string;
  items: CheckoutItemOrderRequest[];
};

export type CheckoutResponse = {
  payment_url: string;
};
