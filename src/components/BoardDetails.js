// style
import { useEffect } from "react";
import "./BoardDetails.scss";

// components
import Card from "./Card";

const BoardDetails = (props) => {
  const cards = props.board.cards.map((card, index) => {
    return (
      <li key={index}>
        <Card card={card} />
      </li>
    );
  });

  useEffect(() => {
    props.setBoardName(props.board.name);
    // return () => {
    //   props.setBoardName("");
    // };
  }, [props.boardName]);

  return (
    <section>
      {/* props.board.name will have to pe passed up to change in the placeholder */}
      {/* <h3>{props.board.name}</h3> */}
      <ul className="boards">{cards}</ul>
    </section>
  );
};

export default BoardDetails;
