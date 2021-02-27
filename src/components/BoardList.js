import Board from "./Board";

const BoardList = (props) => {
  const topics = props.boards.map((topic) => {
    return <Board topic={topic} />;
  });
  return <>{topics}</>;
};

export default BoardList;
