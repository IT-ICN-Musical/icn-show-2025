export type GenerateOTPRequest = {
  email: string;
};

export type VerifyOTPRequest = {
  email: string;
  otp: string;
};

export type VerifyOTPResponse = {
  token: string;
};
