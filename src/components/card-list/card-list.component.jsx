import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ dishes }) => (
  <div className="card-list">
    {dishes.map((dish) => {
      return <Card key={dish.id} dish={dish} />;
    })}
  </div>
);

export default CardList;
