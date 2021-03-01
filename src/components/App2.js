import "./App.scss";

import data from "../data/store.js";

import Home from "./Home";

import Header from "./Header";
import BoardList from "./BoardList";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NewBoard from "./NewBoard";
import List2 from "./List2";

import { Route, Switch, Link } from "react-router-dom";
import NewBoardDetails from "./NewBoardDetails";

function App() {
  const [boards] = useState(data);
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;

  // const boardList = data.map((board) => {
  //   return (
  //     <li>
  //       <NewBoard title={board.name}></NewBoard>
  //     </li>
  //   );
  // });

  const renderBoard = (routerProps) => {
    const routerTitle = routerProps.match.params.name;
    console.log(routerTitle);
    const boardFound = boards.find((board) => board.name === routerTitle);
    return <NewBoardDetails board={boardFound} />;
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
        {/* <>
          <List2 boards={data} />
        </> */}
      </main>
    </>
  );
}

export default App;
