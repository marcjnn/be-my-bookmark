// this one is to try to combine two into one and pass as props children

const NewBoard = (props) => {
  return (
    <>
      {/* when board -> data.name, when card -> data.cards.title */}
      <h2>{props.name}</h2>
      {props.children}
    </>
  );
};

export default NewBoard;
