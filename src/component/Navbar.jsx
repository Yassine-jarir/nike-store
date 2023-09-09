import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setGetTotals, setOpernCart } from "../app/CartSlice";

function Navbar() {
  // RTK
  const dispatch = useDispatch();
  const onCartToggle = () => {
    dispatch(
      setOpernCart({
        cartState: true,
      })
    );
  };

  const [scrol, setscrol] = useState(false);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setscrol(true);
    } else {
      setscrol(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => window.removeEventListener("scroll", onNavScroll);
  }, []);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const state = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [dispatch, state]);

  return (
    <>
      <div className="container">
        <nav className={`nav ${scrol ? "scrol" : ""}`}>
          <div className="nav__img">
            <img src={logo} alt="" className="nav__img" />
          </div>
          <ul>
            <li>
              <i className="fa-brands fa-searchengin"></i>
            </li>
            <li>
              <i className="fa-solid fa-heart"></i>
            </li>
            <li>
              <button className="nav__shop" onClick={onCartToggle}>
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="nav__zero">{totalQuantity}</div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
