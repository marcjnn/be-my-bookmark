import Card from "./Card";

const NewBoardDetails = (props) => {
  console.log(props.board);
  const cards = props.board.cards.map((card, index) => {
    return (
      <li key={index} className="bookmark">
        <Card card={card} />
      </li>
    );
  });
  let res = String(props.board.cards);
  console.log(res);
  return (
    <section>
      {/* props.board.name will have to pe passed up to change in the placeholder */}
      {/* <h3>{props.board.name}</h3> */}
      <ul>{cards}</ul>
    </section>
  );
};

export default NewBoardDetails;
