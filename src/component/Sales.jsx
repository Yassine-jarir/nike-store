import Item from "../utils/Item";
import Title from "../utils/Title";

function Sales({ endPoints }) {
  const { title, items } = endPoints;
  return (
    <div className="sales">
      <div className="container">
        <Title title={title} />
        <div className="sales__box">
          {items.map((item, i) => {
            return <Item key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Sales;
