// here I render all the different boards, divided by topic/subject: front-end, psychology, whatever; each view will only have the title and when clicked, it takes you to the subject board

// style
import "./Home.scss";

// components
import Board from "./Board";

// react
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  useEffect(() => {
    props.setBoardName("");
  }, [props.boardName]);

  const boardList = props.boards.map((board, index) => {
    return (
      <li key={index} className="board__item">
        <Link to={`/board/${board.name}`} className="board__link">
          <Board name={board.name}></Board>
        </Link>
      </li>
    );
  });
  return (
    <>
      <ul className="board__list">{boardList}</ul>
      <div>
        <form action="" method="">
          <h2>Add Bookmark / Board</h2>
          <fieldset>
            <legend>new bookmark</legend>
          </fieldset>
          {/* <fieldset>
            <legend>
              new board - this one hidden en different fieldset depending on what
              adding
            </legend>
          </fieldset> */}
        </form>
      </div>
    </>
  );
};

export default Home;

// in the future, when users, add username instead the "board" in route
