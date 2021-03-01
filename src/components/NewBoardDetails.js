import Bookmark from "./Bookmark";

const NewBoardDetails = (props) => {
  console.log(props.board);
  // const pins = props.card.pins.map((pin, index) => {
  //   return (
  //     <li key={index} className="bookmark">
  //       <Bookmark pin={pin} />
  //     </li>
  //   );
  // });
  let res = String(props);
  let name = props.name;
  console.log(name);
  return (
    <section>
      <h3>{props.board.name}</h3>
      {/* <ul>{pins}</ul> */}
    </section>
  );
};

export default NewBoardDetails;
