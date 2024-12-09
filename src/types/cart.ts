type UUID = string;

type CartItemBundle = {
  item_id: UUID;
  quantity: number;
  bundle_option: CartBundleOption[];
};

type CartRegularItem = {
  item_id: UUID;
  quantity: number;
};

type CartBundleOption = {
  item_id: UUID;
  quantity: number;
} & {
  item_id: UUID;
  quantity: number;
};

export type CartItem = CartRegularItem | CartItemBundle;
