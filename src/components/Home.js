import { Link, Route, Switch } from "react-router-dom";

import NewBoard from "./NewBoard";
const Home = (props) => {
  const boardList = props.boards.map((board, index) => {
    return (
      <li key={index}>
        <Link to={`/board/${board.name}`}>
          <NewBoard name={board.name}></NewBoard>
        </Link>
      </li>
    );
  });
  return <ul>{boardList}</ul>;
};

export default Home;

// in the future, when users, add user before the board name in route
