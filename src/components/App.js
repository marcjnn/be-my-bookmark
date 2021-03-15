// styles & resources
import "./App.scss";
import icons from "../assets/icons";

// data / service / store
import data from "../data/store.js";

// react
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

// components
import Header from "./Header";
import Home from "./Home";
import BoardDetails from "./BoardDetails";

// APP

function App() {
  const [boards] = useState(data);
  const [boardName, setBoardName] = useState("placeholder");

  const renderBoard = (routerProps) => {
    const routerTitle = routerProps.match.params.name;
    const boardFound = boards.find((board) => board.name === routerTitle);
    return (
      <BoardDetails
        board={boardFound}
        setBoardName={setBoardName}
        boardName={boardName}
      />
    );
  };

  return (
    <>
      <Header />
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
            <Home
              boards={boards}
              setBoardName={setBoardName}
              boardName={boardName}
            />
          </Route>

          <Route path="/board/:name" render={renderBoard} />
        </Switch>
      </main>
    </>
  );
}

export default App;
