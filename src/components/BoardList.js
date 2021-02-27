import Board from "./Board";

const BoardList = (props) => {
  const boards = props.boards.map((board, index) => {
    return <Board key={index} board={board} />;
  });
  return <>{boards}</>;
};

export default BoardList;
