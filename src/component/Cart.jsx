import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";

function Cart() {
  return (
    <div className="cart">
      <div className="cart__box">
        <CartCount />
        <CartEmpty />
        <CartItem />
      </div>
    </div>
  );
}

export default Cart;
