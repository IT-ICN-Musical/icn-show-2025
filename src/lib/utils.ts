import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stringToCurrency(text: string): number {
  // XX.XX to XXXX
  const splits = text.split(".");
  return parseInt(splits[0]) * 100 + parseInt(splits[1] ?? "0");
}

export function currencyToString(currency: number): string {
  // XXXX to XX.XX
  return (currency / 100).toFixed(2);
}
