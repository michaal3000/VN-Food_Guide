import "./card.styles.css";

const Card = ({ dish }) => {
  const { id, name, description, category } = dish;

  return (
    <div className="card-container">
      <h2 className="name">{name}</h2>
      <p>{description}</p>
      <p className="category">{category}</p>
    </div>
  );
};

export default Card;
