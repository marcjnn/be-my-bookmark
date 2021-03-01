// A single board comopnent which includes all pined articles; each board is a single section

import "./Board.scss";
import Card from "./Card";

const Board = (props) => {
  console.log(props);
  const cards = props.board.cards.map((card, index) => {
    return (
      <li key={index} className="card">
        <Card card={card} />
      </li>
    );
  });
  return (
    // <section>
    <ul>{cards}</ul>
    // </section>
  );
};

export default Board;

// const Board = (props) => {
//   const cards = props.board.cards.map((card, index) => {
//     return (
//       <li key={index} className="card">
//         <Card card={card} />
//       </li>
//     );
//   });
