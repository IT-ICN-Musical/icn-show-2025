import { ClientClothingSizes } from "@/types/items";
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

const SIZE_ORDER = ["2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL"];

export function sortSizes(items: ClientClothingSizes[]): ClientClothingSizes[] {
  return [...items].sort((a, b) => {
    const indexA = SIZE_ORDER.indexOf(a.size);
    const indexB = SIZE_ORDER.indexOf(b.size);

    // If both sizes are in the SIZE_ORDER array
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    // If neither size is in the SIZE_ORDER array, maintain original order
    if (indexA === -1 && indexB === -1) {
      return 0;
    }

    // If only one size is unknown, put it at the end
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return 0;
  });
}
