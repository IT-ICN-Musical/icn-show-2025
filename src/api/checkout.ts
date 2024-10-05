import { request } from "@/lib/request";
import { CheckoutRequest, CheckoutResponse } from "@/types/checkout";

export async function submitCheckout(
  id: string,
  body: CheckoutRequest,
): Promise<CheckoutResponse> {
  const response = await request<CheckoutResponse>({
    method: "POST",
    path: `v2/shop/items/generics/${id}`,
    body: body,
  });

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
