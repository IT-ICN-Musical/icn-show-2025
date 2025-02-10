import { CartItem } from "@/types/cart";
import { StateCreator, create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CartStoreType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  resetCart: () => void;
};

const useCartStoreBase: StateCreator<CartStoreType> = (set) => ({
  cart: [],
  addToCart: (item: CartItem) =>
    set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (index: number) =>
    set((state) => ({ cart: state.cart.filter((_, i) => i !== index) })),
  resetCart: () => set({ cart: [] }),
});

const cartMiddleware = (creator: StateCreator<CartStoreType>) =>
  persist<CartStoreType>(creator, {
    name: "cart",
    storage: createJSONStorage(() => sessionStorage),
  });

export const useCartStore = create<CartStoreType>()(
  cartMiddleware(useCartStoreBase),
);
