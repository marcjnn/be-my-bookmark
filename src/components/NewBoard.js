// this one is to try to combine two into one and pass as props children

// style
import "./NewBoard.scss";

const NewBoard = (props) => {
  return (
    <>
      {/* when board -> data.name, when card -> data.cards.title */}
      <h3 className="board__title">{props.name}</h3>
      {props.children}
    </>
  );
};

export default NewBoard;
