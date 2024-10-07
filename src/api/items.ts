import { request } from "@/lib/request";
import {
  RetrieveBundleDetailsResponse,
  RetrieveClothingDetailsResponse,
  RetrieveGenericDetailsResponse,
  RetrieveShopItemsResponse,
  RetrieveShowDetailsResponse,
} from "@/types/items";

export async function fetchShopItems(): Promise<RetrieveShopItemsResponse> {
  const response = await request<RetrieveShopItemsResponse>({
    method: "GET",
    path: "v2/shop/items",
  });

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}

export async function fetchBundleDetails(
  id: string,
): Promise<RetrieveBundleDetailsResponse> {
  const response = await request<RetrieveBundleDetailsResponse>({
    method: "GET",
    path: `v2/shop/items/bundles/${id}`,
  });

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}

export async function fetchShowDetails(
  id: string,
): Promise<RetrieveShowDetailsResponse> {
  const response = await request<RetrieveShowDetailsResponse>({
    method: "GET",
    path: `v2/shop/items/shows/${id}`,
  });

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}

export async function fetchClothingDetails(
  id: string,
): Promise<RetrieveClothingDetailsResponse> {
  const response = await request<RetrieveClothingDetailsResponse>({
    method: "GET",
    path: `v2/shop/items/clothings/${id}`,
  });

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}

export async function fetchGenericDetails(
  id: string,
): Promise<RetrieveGenericDetailsResponse> {
  const response = await request<RetrieveGenericDetailsResponse>({
    method: "GET",
    path: `v2/shop/items/generics/${id}`,
  });

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
