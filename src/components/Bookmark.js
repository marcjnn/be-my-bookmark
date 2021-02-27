import "./Bookmark.scss";

const Bookmark = (props) => {
  return (
    <>
      <h4 className="bookmark__title">{props.pin.title}</h4>
      <p className="bookmark__content">{props.pin.notes}</p>
    </>
  );
};

export default Bookmark;
