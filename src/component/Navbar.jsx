import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrol, setscrol] = useState(false);
  console.log(scrol);
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
              <button className="nav__shop">
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="nav__zero">0</div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
