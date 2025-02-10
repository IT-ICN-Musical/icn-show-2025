import { request } from "@/lib/request";
import {
  GenerateOTPRequest,
  VerifyOTPRequest,
  VerifyOTPResponse,
} from "@/types/otp-auth";

export async function generateOTP(
  body: GenerateOTPRequest,
): Promise<undefined> {
  const response = await request<undefined>({
    method: "POST",
    path: `v2/otp-auth/generate`,
    body: body,
  });

  if (!response.success) {
    throw new Error(response.message);
  }
}

export async function verifyOTP(
  body: VerifyOTPRequest,
): Promise<VerifyOTPResponse> {
  const response = await request<VerifyOTPResponse>({
    method: "POST",
    path: `v2/otp-auth/verify`,
    body: body,
  });

  if (!response.success) {
    throw new Error(response.message);
  }

  return response.data;
}
