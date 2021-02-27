import "./App.scss";

import data from "../data/store.js";

import Header from "./Header";
// import Main from "./Main";
import BoardList from "./BoardList";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [boards] = useState(data);
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  return (
    <>
      <Header />

      <main className="main">
        <nav className="main__menu">
          <ul className="menu">
            <li className="menu__item">1</li>
            <li className="menu__item">2</li>
            <li className="menu__item">{plusIcon}</li>
          </ul>
        </nav>
        <BoardList boards={boards} />
      </main>
    </>
  );
}

export default App;
