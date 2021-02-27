import Board from "./Board";

const BoardList = (props) => {
  // console.log("props form app ", props);
  const boardstoprint = props.boards.map((board, index) => {
    return <Board key={index} board={board} />;
  });
  return <>{boardstoprint}</>;
};

export default BoardList;
