import { useEffect } from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { setGetTotals } from "../app/CartSlice";

function Cart() {
  const state = useSelector((state) => state.cart.cartState);
  const cartim = useSelector((state) => state.cart.cartItems);
  const stateItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = useSelector((state) => state.cart.totalPrice);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [dispatch, cartim]);

  return (
    <div className={`cart ${state ? "openCart" : "CloseCart"}`}>
      <div className={`cart__box ${state ? "openBox" : "closeCartBox"}`}>
        <CartCount />

        {stateItems.length === 0 ? (
          <CartEmpty />
        ) : (
          <div>
            <div style={{ overflowY: "scroll", height: "70vh" }}>
              <div style={{ overflowY: "scroll", height: "70vh" }}>
                {stateItems?.map((item, i) => {
                  return <CartItem item={item} key={i} />;
                })}
              </div>
            </div>
            <div className="cartItems__sub">
              <div className="cartItems__sub__title">
                <h1>Subtotal</h1>
                <h1>{totalPrice} $</h1>
              </div>
              <div className="cartItems__btnss">
                <button>Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
