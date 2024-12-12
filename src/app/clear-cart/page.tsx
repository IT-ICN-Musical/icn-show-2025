"use client";

import { useCartStore } from "@/store/cart";
import { useRouter } from "next/navigation";

export default function Page() {
  const { resetCart } = useCartStore();
  resetCart();

  const router = useRouter();
  router.push("/");
  return null;
}
