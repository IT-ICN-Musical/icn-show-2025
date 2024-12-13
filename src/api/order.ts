import { request } from "@/lib/request";
import { CheckoutRequest, CheckoutResponse } from "@/types/checkout";
import { CheckOrderRequest, CheckOrderResponse } from "@/types/order";

export async function checkOrder(
  body: CheckOrderRequest,
): Promise<CheckOrderResponse> {
  const response = await request<CheckOrderResponse>({
    method: "POST",
    path: `v2/order/check`,
    body: body,
  });

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
