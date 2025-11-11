import { create } from "zustand";
import { ICasualOutfit } from "@/app/types/index.type";

interface CartItem extends ICasualOutfit {
  quantity: number;
  selectedSize?: string;
  selectedPrice?: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: ICasualOutfit) => void;
  removeFromCart: (id: string) => void;
  isInCart: (id: string) => boolean;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
  updateSize: (id: string, size: string) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (item: ICasualOutfit) =>
    set((state) => {
      const exists = state.cart.find((c) => c.id === item.id);
      if (exists) return state;

      const defaultVariant = item.variants?.[0];
      const defaultPrice =
        defaultVariant?.price ?? item.discountedPrice ?? item.price;

      return {
        cart: [
          ...state.cart,
          {
            ...item,
            image: typeof item.image === "string" ? item.image : item.image.src, // ✅ store only string
            quantity: 1,
            selectedSize: defaultVariant?.size ?? "M",
            selectedPrice: defaultPrice,
          },
        ],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((i) => i.id !== id),
    })),

  isInCart: (id) => get().cart.some((i) => i.id === id),

  clearCart: () => set({ cart: [] }),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, quantity) } // prevent zero or negative
          : item
      ),
    })),

  updateSize: (id, size) =>
    set((state) => ({
      cart: state.cart.map((item) => {
        if (item.id !== id) return item;

        const newVariant = item.variants?.find((v) => v.size === size);
        const newPrice =
          newVariant?.price ?? item.discountedPrice ?? item.price;

        return {
          ...item,
          selectedSize: size,
          selectedPrice: newPrice,
        };
      }),
    })),
}));
