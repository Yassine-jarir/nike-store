import PropTypes from "prop-types";
function Item({ item }) {
  return (
    <div className="item">
      <h1>{item.title}</h1>
      <h3>{item.text}</h3>
      <div className="item__price">
        <p>
          {item.price} <span>$</span>{" "}
        </p>
        <p>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>{" "}
          {item.rating}
        </p>
      </div>
      <div className="item__buy">
        <button>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
        <button>{item.btn} </button>
      </div>
      <img className="item__img" src={item.img} alt="" />
    </div>
  );
}

export default Item;

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
