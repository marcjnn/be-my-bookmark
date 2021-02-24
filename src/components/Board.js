import Bookmark from "./Bookmark";

const Board = (props) => {
  const pins = props.board.pins.map((pin) => {
    return (
      <li>
        <Bookmark pin={pin} />
      </li>
    );
  });
  return (
    <>
      <h3>{props.board.title}</h3>
      <ul>{pins}</ul>
    </>
  );
};

export default Board;
