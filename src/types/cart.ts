type UUID = string;

type CartBundleOption = {
  item_id: UUID;
  quantity: number;
};

export type CartItem = {
  item_id: UUID;
  quantity: number;
  is_ticket?: boolean;
  bundle_option?: CartBundleOption[];
};
