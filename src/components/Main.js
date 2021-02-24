import "./Main.scss";

import TopicList from "./TopicList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Main = (props) => {
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  return (
    <main className="main">
      <nav className="main__menu">
        <ul className="menu">
          <li className="menu__item">1</li>
          <li className="menu__item">2</li>
          <li className="menu__item">{plusIcon}</li>
        </ul>
      </nav>
      <TopicList boards={props.boards} />
    </main>
  );
};

export default Main;
