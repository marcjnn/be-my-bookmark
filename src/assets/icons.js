import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faPlus,
  faBook,
  faHome,
  faCopyright,
  faAt,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  user: <FontAwesomeIcon icon={faUserCircle} className="reactIcon" />,
  plus: <FontAwesomeIcon icon={faPlus} className="reactIcon" />,
  book: <FontAwesomeIcon icon={faBook} className="reactIcon" />,
  home: <FontAwesomeIcon icon={faHome} className="reactIcon" />,
  homepage: <FontAwesomeIcon icon={faHome} className="reactIcon" />,
  copyright: <FontAwesomeIcon icon={faCopyright} className="reactIcon" />,
  at: <FontAwesomeIcon icon={faAt} className="reactIcon" />,
};

export default icons;
