import emptybag from "../../assets/emptybag.png";

function CartEmpty() {
  return (
    <div className="cartempty">
      <img src={emptybag} alt="" />
      <button className="cartempty__btn">
        <i className="fa-solid fa-arrow-left"></i>
        <span>Back To Nike Store</span>
      </button>
    </div>
  );
}

export default CartEmpty;
