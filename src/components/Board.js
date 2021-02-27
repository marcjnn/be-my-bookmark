import "./Board.scss";
import Card from "./Card";

const Board = (props) => {
  const cards = props.board.cards.map((card, index) => {
    return (
      <li key={index} className="card">
        <Card card={card} />
      </li>
    );
  });
  return (
    <section className="board">
      <h2 className="board__title">{props.board.name}</h2>
      <ul>{cards}</ul>
    </section>
  );
};

export default Board;
