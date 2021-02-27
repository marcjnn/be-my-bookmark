import Bookmark from "./Bookmark";

const Card = (props) => {
  const pins = props.board.pins.map((pin, index) => {
    return (
      <li key={index}>
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

export default Card;
