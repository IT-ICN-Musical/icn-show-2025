type UUID = string;

export type CheckoutItemOrderRequest = {
  item_id: UUID;
  quantity: number;
  bundle_options?: {
    item_id: UUID;
    quantity: number;
  }[];
};

export type ViewerDetails = {
  ticket_item_id: UUID;
  viewers: string[];
};

export type FlowerMessage = {
  from: string;
  to: string;
  message: string;
  delivery: boolean;
};

export type FlowerDetails = {
  item_id: UUID;
  messages: FlowerMessage[];
};

export type CheckoutRequest = {
  buyer_email_token: string;
  buyer_name: string;
  buyer_phone: string;
  promo_code?: string;
  items: CheckoutItemOrderRequest[];
  viewer_details: ViewerDetails[];
  flower_details: FlowerDetails[];
};

export type CheckoutResponse = {
  payment_url: string;
};
