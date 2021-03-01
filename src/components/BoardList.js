// here I render all the different boards, divided by topic/subject: front-end, psychology, whatever; each view will only have the title and when clicked, it takes you to the subject board

import Board from "./Board";

const BoardList = (props) => {
  const boards = props.boards.map((board, index) => {
    return (
      <li key={index}>
        <Board board={board} />
      </li>
    );
  });
  return <ul>{boards}</ul>;
};

export default BoardList;


