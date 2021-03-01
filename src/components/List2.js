import Board from "./Board";

const List = (props) => {
  console.log(props);
  const boards = props.boards.map((board, index) => {
    return (
      <li key={index}>
        <Board board={board} />
      </li>
    );
  });
  return <ul>{boards}</ul>;
};

export default List;
