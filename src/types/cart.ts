type UUID = string;

type CartBundleOption = {
  item_id: UUID;
  quantity: number;
} & {
  item_id: UUID;
  quantity: number;
};

export type CartItem = {
  item_id: UUID;
  quantity: number;
  bundle_option?: CartBundleOption[];
};
