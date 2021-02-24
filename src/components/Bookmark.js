const Bookmark = (props) => {
  return (
    <>
      <h4>{props.pin.title}</h4>
      <p>{props.pin.notes}</p>
    </>
  );
};

export default Bookmark;
