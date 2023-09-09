import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  totalQuantity: 0,
  totalPrice: 0,
};
console.log(initialState.cartItems);
// quantite = 0;
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpernCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const searchItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (searchItem >= 0) {
        state.cartItems[searchItem].quantite += 1;
        toast.success(`item quantity plus`);
      } else {
        const item = { ...action.payload, quantite: 1 };
        state.cartItems.push(item);

        toast.success(`${action.payload.titles} added to cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.titles} Removed from cart`);
    },
    setIcreaseItemQTY: (state, action) => {
      const increase = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems[increase].quantite += 1;
      toast.success(`Item quantity increased`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQTY: (state, action) => {
      const increase = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[increase].quantite > 1) {
        state.cartItems[increase].quantite -= 1;
        toast.success(`Item quantity Decreased`);
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    setClearItems: (state) => {
      state.cartItems = [];
      toast.success(`cart cleard`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setGetTotals: (state) => {
      let { totalqun, totalprice } = state.cartItems.reduce(
        (starttotal, cartItem) => {
          const { price, quantite } = cartItem;

          starttotal.totalprice += price * quantite;
          starttotal.totalqun += quantite;

          return starttotal;
        },
        { totalqun: 0, totalprice: 0 }
      );
      state.totalPrice = totalprice;
      state.totalQuantity = totalqun;
    },
  },
});

export const {
  setCloseCart,
  setOpernCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIcreaseItemQTY,
  setDecreaseItemQTY,
  setClearItems,
  setGetTotals,
} = CartSlice.actions;
export default CartSlice.reducer;
