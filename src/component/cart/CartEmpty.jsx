import { useDispatch } from "react-redux";
import { setOpernCart } from "../../app/CartSlice";
import emptybag from "../../assets/emptybag.png";

function CartEmpty() {
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(
      setOpernCart({
        cartState: false,
      })
    );
  };
  return (
    <div className="cartempty">
      <img src={emptybag} alt="" />
      <button className="cartempty__btn" onClick={onCartToggle}>
        <i className="fa-solid fa-arrow-left"></i>
        <span>Back To Nike Store</span>
      </button>
    </div>
  );
}

export default CartEmpty;
