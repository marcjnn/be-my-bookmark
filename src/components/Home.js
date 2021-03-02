// here I render all the different boards, divided by topic/subject: front-end, psychology, whatever; each view will only have the title and when clicked, it takes you to the subject board

// style
import "./Home.scss";

// components
import Board from "./Board";

// react
import { Link } from "react-router-dom";

const Home = (props) => {
  const boardList = props.boards.map((board, index) => {
    return (
      <li key={index} className="board__item">
        <Link to={`/board/${board.name}`} className="board__link">
          <Board name={board.name}></Board>
        </Link>
      </li>
    );
  });
  return <ul className="board__list">{boardList}</ul>;
};

export default Home;

// in the future, when users, add username instead the "board" in route
