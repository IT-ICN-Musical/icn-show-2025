type UUID = string;
type ItemUUID = UUID;
type ShowUUID = UUID;
type ClothingUUID = UUID;
type BundleUUID = UUID;
type GenericUUID = UUID;

// Details
interface ClientShowTickets {
  item_id: ItemUUID;
  category: string;
  price: string;
  max_order: number;
}

interface ClientClothingSizes {
  item_id: ItemUUID;
  size: string;
  price: string;
  max_order: number;
}

interface ClientGenericDetail {
  item_id: ItemUUID;
}

// Bundle types
interface ClientBundleStaticItem {
  item_id: ItemUUID;
  old_price: string;
  price: string;
  max_order: number;
  bundle_amount?: number;
}

interface ClientBundleShowTicket {
  item_id?: ItemUUID;
  category: string;
  old_price: string;
  price: string;
  max_order: number;
}

interface ClientBundleClothingSize {
  item_id: ItemUUID;
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
  show_id?: ShowUUID;
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
  bundle_id?: BundleUUID;
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
  clothing_id?: ClothingUUID;
  name: string;
  min_price: string;
  max_order: number;
  image_url?: string | null;
  fixed_price: boolean;
  bundle_amount?: number;
  sizes?: T[];
}

interface ClientGenericItem {
  generic_id?: GenericUUID;
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
