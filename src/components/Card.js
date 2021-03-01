// a board can (but doesn't have to) be divided into subsections if we want to group certain articles by a specific tag (eg. html, css under front-end); if no tag is specified, it just prints a list of pined articles

// import "./Card.scss";
import "./Board.scss";

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
    <section className="card">
      <h3 className="card__title">{props.card.title}</h3>
      <ul>{pins}</ul>
    </section>
  );
};

export default Card;
