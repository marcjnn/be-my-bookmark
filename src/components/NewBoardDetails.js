// style
import "./Board.scss";

// components
import Card from "./Card";

const NewBoardDetails = (props) => {
  const cards = props.board.cards.map((card, index) => {
    return (
      <li key={index}>
        <Card card={card} />
      </li>
    );
  });

  return (
    <section>
      {/* props.board.name will have to pe passed up to change in the placeholder */}
      {/* <h3>{props.board.name}</h3> */}
      <ul>{cards}</ul>
    </section>
  );
};

export default NewBoardDetails;
