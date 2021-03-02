// styles
import "./App.scss";

// data / service / store
import data from "../data/store.js";

// components
import Header from "./Header";
import Home from "./Home";
import BoardDetails from "./BoardDetails";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

// react
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  const [boards] = useState(data);
  const [boardName, setBoardName] = useState("placeholder");
  const [icons] = useState({
    plus: <FontAwesomeIcon icon={faPlus} />,
    book: <FontAwesomeIcon icon={faBook} />,
    user: <FontAwesomeIcon icon={faUserCircle} />,
  });
  // const plusIcon = <FontAwesomeIcon icon={faPlus} />;

  const renderBoard = (routerProps) => {
    const routerTitle = routerProps.match.params.name;
    const boardFound = boards.find((board) => board.name === routerTitle);
    setBoardName(boardFound.name);
    return <BoardDetails board={boardFound} />;
  };

  return (
    <>
      <Header icon={icons.user} />
      <main className="main">
        <header className="main__header">
          <h2 className="main__boardName">{boardName}</h2>
          <nav className="main__menu">
            <ul className="menu">
              <li className="menu__item">{icons.plus}</li>
              <li className="menu__item">{icons.book}</li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <Home boards={boards} setBoardName={setBoardName} />
          </Route>

          <Route path="/board/:name" render={renderBoard} />
        </Switch>
      </main>
    </>
  );
}

export default App;
