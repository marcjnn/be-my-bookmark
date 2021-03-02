// this one is to try to combine two into one and pass as props children

// style
import { useEffect } from "react";
import "./Board.scss";

const Board = (props) => {
  return (
    <>
      {/* when board -> data.name, when card -> data.cards.title */}
      <h3 className="board__title">{props.name}</h3>
      {props.children}
    </>
  );
};

export default Board;
