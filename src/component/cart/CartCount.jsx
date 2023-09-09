import { useDispatch, useSelector } from "react-redux";
import { setClearItems, setCloseCart, setGetTotals } from "../../app/CartSlice";
import { useEffect } from "react";

function CartCount() {
  const dispatch = useDispatch();

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  const clear = () => {
    dispatch(setClearItems());
  };
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const state = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [dispatch, state]);

  return (
    <div className="cartcount">
      <div className="cartcount__content">
        <button
          style={{ border: "none", background: "none" }}
          onClick={onCartToggle}
        >
          <i className="fa-solid fa-backward"></i>
        </button>

        <div>
          <h1>
            Your Cart <span className="span">{totalQuantity} items</span>{" "}
          </h1>
        </div>
      </div>
      <div className="cartcount__trash">
        <button className="cartcount__xmark" onClick={clear}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CartCount;
