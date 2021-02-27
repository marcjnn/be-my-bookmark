import "./Card.scss";

import Bookmark from "./Bookmark";

const Card = (props) => {
  const pins = props.card.pins.map((pin, index) => {
    return (
      <li key={index} className="bookmark">
        <Bookmark pin={pin} />
      </li>
    );
  });
  return (
    <>
      <h3 className="card__title">{props.card.title}</h3>
      <ul>{pins}</ul>
    </>
  );
};

export default Card;
