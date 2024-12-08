import { request } from "@/lib/request";
import { CheckoutRequest, CheckoutResponse } from "@/types/checkout";
import {
  PreviewOrderRequest,
  PreviewOrderResponse,
} from "@/types/preview-order";

export async function previewOrder(
  body: PreviewOrderRequest,
): Promise<PreviewOrderResponse> {
  const response = await request<PreviewOrderResponse>({
    method: "POST",
    path: `v2/order/preview`,
    body: body,
  });

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
