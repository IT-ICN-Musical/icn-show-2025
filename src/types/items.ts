// Details
interface ClientShowTickets {
  item_id?: string;
  category: string;
  price: string;
  max_order: number;
}

interface ClientClothingSizes {
  item_id?: string;
  size: string;
  price: string;
  max_order: number;
}

interface ClientGenericDetail {
  item_id?: string;
}

// Bundle types
interface ClientBundleStaticItem {
  item_id: string;
  old_price: string;
  price: string;
  max_order: number;
  bundle_amount?: number;
}

interface ClientBundleShowTicket {
  item_id?: string;
  category: string;
  old_price: string;
  price: string;
  max_order: number;
}

interface ClientBundleClothingSize {
  item_id: string;
  size: string;
  old_price: string;
  price: string;
  max_order: number;
}

type ClientBundleShow = ClientShowItemGeneric<ClientBundleShowTicket>;
type ClientBundleClothing = ClientClothingItemGeneric<ClientBundleClothingSize>;

interface ClientBundleDetail {
  generic_item?: ClientBundleStaticItem;
  show?: ClientBundleShow;
  clothing?: ClientBundleClothing;
  amount: number;
}

// Generic types
type ClientShowItem = ClientShowItemGeneric<ClientShowTickets>;

interface ClientShowItemGeneric<T> {
  show_id?: string;
  name: string;
  min_price: string;
  max_order: number;
  image_url?: string | null;
  fixed_price: boolean;
  start_time: Date;
  end_time: Date;
  bundle_amount?: number;
  tickets?: T[];
}

interface ClientBundleItem {
  bundle_id?: string;
  name: string;
  old_min_price: string;
  min_price: string;
  max_order: number;
  image_url?: string | null;
  fixed_price: boolean;
  items?: ClientBundleDetail[];
}

type ClientClothingItem = ClientClothingItemGeneric<ClientClothingSizes>;

interface ClientClothingItemGeneric<T> {
  clothing_id?: string;
  name: string;
  min_price: string;
  max_order: number;
  image_url?: string | null;
  fixed_price: boolean;
  bundle_amount?: number;
  sizes?: T[];
}

interface ClientGenericItem {
  generic_id?: string;
  name: string;
  price: string;
  max_order: number;
  image_url?: string | null;
  fixed_price: boolean;
  details?: ClientGenericDetail;
}

export interface RetrieveShopItemsResponse {
  shows: ClientShowItem[];
  bundles: ClientBundleItem[];
  clothings: ClientClothingItem[];
  generics: ClientGenericItem[];
}

export type RetrieveBundleDetailsResponse = ClientBundleItem;

export type RetrieveShowDetailsResponse = ClientShowItem;

export type RetrieveClothingDetailsResponse = ClientClothingItem;

export type RetrieveGenericDetailsResponse = ClientGenericItem;
