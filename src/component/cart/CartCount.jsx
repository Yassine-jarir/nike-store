function CartCount() {
  return (
    <div className="cartcount">
      <div className="cartcount__content">
        <div>
          <i className="fa-solid fa-backward"></i>
        </div>
        <div>
          <h1>
            Your Cart <span className="span">items</span>{" "}
          </h1>
        </div>
      </div>
      <div className="cartcount__trash">
        <button className="cartcount__xmark">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CartCount;
