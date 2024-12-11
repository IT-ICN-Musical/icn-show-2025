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
  price: number;
  max_order: number;
}

export interface ClientClothingSizes {
  item_id: ItemUUID;
  size: string;
  price: number;
  max_order: number;
}

interface ClientGenericDetail {
  item_id: ItemUUID;
}

// Bundle types
interface ClientBundleStaticItem {
  item_id: ItemUUID;
  old_price: number;
  price: number;
  name: string;
  image_url?: string;
  max_order: number;
  bundle_amount?: number;
}

interface ClientBundleShowTicket {
  item_id: ItemUUID;
  category: string;
  old_price: number;
  price: number;
  max_order: number;
}

export interface ClientBundleClothingSize {
  item_id: ItemUUID;
  size: string;
  old_price: number;
  price: number;
  max_order: number;
}

export type ClientBundleShow = ClientShowItemGeneric<ClientBundleShowTicket>;
export type ClientBundleClothing =
  ClientClothingItemGeneric<ClientBundleClothingSize>;

export interface ClientBundleDetail {
  generic_item?: ClientBundleStaticItem;
  show?: ClientBundleShow;
  clothing?: ClientBundleClothing;
  amount: number;
}

// Generic types
export type ClientShowItem = ClientShowItemGeneric<ClientShowTickets>;

interface ClientShowItemGeneric<T> {
  show_id: ShowUUID;
  name: string;
  min_price: number;
  max_order: number;
  image_url?: string | null;
  fixed_price: boolean;
  start_time: Date;
  end_time: Date;
  bundle_amount?: number;
  tickets?: T[];
}

export interface ClientBundleItem {
  item_id: ItemUUID;
  name: string;
  description?: string;
  old_min_price: number;
  min_price: number;
  max_order: number;
  image_url?: string | null;
  fixed_price: boolean;
  items?: ClientBundleDetail[];
  start_time?: string;
  end_time?: string;
}

export type ClientClothingItem = ClientClothingItemGeneric<ClientClothingSizes>;

interface ClientClothingItemGeneric<T> {
  clothing_id: ClothingUUID;
  name: string;
  min_price: number;
  max_order: number;
  image_url?: string | null;
  fixed_price: boolean;
  bundle_amount?: number;
  sizes?: T[];
}

export interface ClientGenericItem {
  item_id: ItemUUID;
  name: string;
  price: number;
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
