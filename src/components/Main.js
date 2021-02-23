import "./Main.scss";

const Main = () => {
  return (
    <main class="personalMain">
      <nav class="subMenu column">
        <ul class="navBar">
          <li>1</li>
          <li>2</li>
          <li>
            <i class="fas fa-plus"></i>
          </li>
        </ul>
      </nav>
      <section class="boards column">
        <div class="newBoard">
          <h3 class="boardName">front-end</h3>
          <ul class="boardSection">
            <li>
              <h3 class="boardSectionName">html</h3>
            </li>
            <li>
              <ul class="bookmarks">
                <li>
                  <h4 class="bmTitle">html art 1</h4>
                  <p class="bmDescription">description art 1 or abstract</p>
                </li>
              </ul>
            </li>
            <li>
              <ul class="bookmarks">
                <li>
                  <h4 class="bmTitle">html art 2</h4>
                  <p class="bmDescription">description art 2 or abstract</p>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="boardSection">
            <li>
              <h3 class="boardSectionName">css</h3>
            </li>
            <li>
              <ul class="bookmarks">
                <li>
                  <h4 class="bmTitle">css art 1</h4>
                  <p class="bmDescription">description art 1 or abstract</p>
                </li>
              </ul>
            </li>
            <li>
              <ul class="bookmarks">
                <li>
                  <h4 class="bmTitle">css art 2</h4>
                  <p class="bmDescription">description art 2 or abstract</p>
                </li>
              </ul>
            </li>
            <li>
              <ul class="bookmarks">
                <li>
                  <h4 class="bmTitle">css art 3</h4>
                  <p class="bmDescription">description art 3 or abstract</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="newBoard">
          <h3 class="boardName">childs psychology</h3>
          <ul class="bookmarks">
            <li>
              <h4 class="bmTitle">psycho art 1</h4>
              <p class="bmDescription">psycho art 1 description or abstract</p>
            </li>
          </ul>
          <ul class="bookmarks">
            <li>
              <h4 class="bmTitle">psycho art 2</h4>
              <p class="bmDescription">psycho art 2 description or abstract</p>
            </li>
          </ul>
          <ul class="bookmarks">
            <li>
              <h4 class="bmTitle">psycho art 3</h4>
              <p class="bmDescription">psycho art 3 description or abstract</p>
            </li>
          </ul>
          <ul class="bookmarks">
            <li>
              <h4 class="bmTitle">psycho art 4</h4>
              <p class="bmDescription">psycho art 4 description or abstract</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Main;
