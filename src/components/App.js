// styles
import "./App.scss";

// data / service / store
import data from "../data/store.js";

// components
import Header from "./Header";
import Home from "./Home";
import BoardDetails from "./BoardDetails";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

// react
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  const [boards] = useState(data);
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;

  const renderBoard = (routerProps) => {
    const routerTitle = routerProps.match.params.name;
    const boardFound = boards.find((board) => board.name === routerTitle);
    return <BoardDetails board={boardFound} />;
  };

  return (
    <>
      <Header />
      <main className="main">
        <nav className="main__menu">
          <ul className="menu">
            <li className="menu__item"> placeholder for board name</li>
            <li className="menu__item">1</li>
            <li className="menu__item">2</li>
            <li className="menu__item">{plusIcon}</li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home boards={boards} />
          </Route>

          <Route path="/board/:name" render={renderBoard} />
        </Switch>
      </main>
    </>
  );
}

export default App;
