import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIcreaseItemQTY,
  setRemoveItemFromCart,
} from "../../app/CartSlice";

function CartItem({ item: { titles, text, img, price, id, quantite } }) {
  const dispatch = useDispatch();
  const removeItems = () => {
    dispatch(setRemoveItemFromCart({ id }));
  };
  const increaseItem = () => {
    dispatch(setIcreaseItemQTY({ id }));
  };
  const DecreaseItem = () => {
    dispatch(setDecreaseItemQTY({ id }));
  };

  return (
    <div className="cartItems">
      <div className="cartItems__box">
        <img src={img} alt="" />
        <div className="cartItems__content">
          <h1>{titles}</h1>
          <p>{text}</p>
          <div className="cartItems__btns">
            <button style={{ cursor: "pointer" }} onClick={DecreaseItem}>
              -
            </button>
            <p>{quantite}</p>
            <button style={{ cursor: "pointer" }} onClick={increaseItem}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="cartItems__trash">
        <p>{price}$</p>
        <button onClick={removeItems}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
