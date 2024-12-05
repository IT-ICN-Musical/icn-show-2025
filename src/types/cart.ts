type UUID = string;

type CartItemBundle = {
  type: "bundle";
  bundle_id: UUID;
  name: string;
  individual_price: number;
  image_url: string;
  quantity: number;
  bundle_option: CartBundleOption[];
};

type CartItemTicket = {
  type: "ticket";
  item_id: UUID;
  name: string;
  individual_price: number;
  quantity: number;
  ticket_option?: CartTicketOption[];
};

type CartItemClothing = {
  type: "clothing";
  item_id: UUID;
  name: string;
  individual_price: number;
  image_url: string;
  quantity: number;
};

type CartItemGeneric = {
  type: "generic";
  item_id: UUID;
  name: string;
  individual_price: number;
  quantity: number;
};

type CartTicketOption = {
  name: string;
};

type CartBundleOption = {
  show_id: UUID;
  item_id: UUID;
  quantity: number;
} & {
  clothing_id: UUID;
  item_id: UUID;
  quantity: number;
};

export type CartItem =
  | CartItemBundle
  | CartItemTicket
  | CartItemClothing
  | CartItemGeneric;
