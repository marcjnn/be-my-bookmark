import Board from "./Board";

const Topic = (props) => {
  const boards = props.topic.boards.map((board) => {
    return (
      <li>
        <Board board={board} />
      </li>
    );
  });
  return (
    <section>
      <h2>{props.topic.name}</h2>
      <ul>{boards}</ul>
    </section>
  );
};

export default Topic;
{
  /* <section className="boards column">
        <div className="newBoard">
          <h3 className="boardName">front-end</h3>
          <ul className="boardSection">
            <li>
              <h3 className="boardSectionName">html</h3>
            </li>
            <li>
              <ul className="bookmarks">
                <li>
                  <h4 className="bmTitle">html art 1</h4>
                  <p className="bmDescription">description art 1 or abstract</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="bookmarks">
                <li>
                  <h4 className="bmTitle">html art 2</h4>
                  <p className="bmDescription">description art 2 or abstract</p>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="boardSection">
            <li>
              <h3 className="boardSectionName">css</h3>
            </li>
            <li>
              <ul className="bookmarks">
                <li>
                  <h4 className="bmTitle">css art 1</h4>
                  <p className="bmDescription">description art 1 or abstract</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="bookmarks">
                <li>
                  <h4 className="bmTitle">css art 2</h4>
                  <p className="bmDescription">description art 2 or abstract</p>
                </li>
              </ul>
            </li>
            <li>
              <ul className="bookmarks">
                <li>
                  <h4 className="bmTitle">css art 3</h4>
                  <p className="bmDescription">description art 3 or abstract</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="newBoard">
          <h3 className="boardName">childs psychology</h3>
          <ul className="bookmarks">
            <li>
              <h4 className="bmTitle">psycho art 1</h4>
              <p className="bmDescription">
                psycho art 1 description or abstract
              </p>
            </li>
          </ul>
          <ul className="bookmarks">
            <li>
              <h4 className="bmTitle">psycho art 2</h4>
              <p className="bmDescription">
                psycho art 2 description or abstract
              </p>
            </li>
          </ul>
          <ul className="bookmarks">
            <li>
              <h4 className="bmTitle">psycho art 3</h4>
              <p className="bmDescription">
                psycho art 3 description or abstract
              </p>
            </li>
          </ul>
          <ul className="bookmarks">
            <li>
              <h4 className="bmTitle">psycho art 4</h4>
              <p className="bmDescription">
                psycho art 4 description or abstract
              </p>
            </li>
          </ul>
        </div>
      </section> */
}
