import { request } from "@/lib/request";
import { CheckoutRequest, CheckoutResponse } from "@/types/checkout";

export async function submitCheckout(
  body: CheckoutRequest,
): Promise<CheckoutResponse> {
  const response = await request<CheckoutResponse>({
    method: "POST",
    path: `v2/order/checkout`,
    body: body,
  });

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
