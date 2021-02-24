import Topic from "./Topic";

const TopicList = (props) => {
  const topics = props.boards.map((topic) => {
    return <Topic topic={topic} />;
  });
  return <>{topics}</>;
};

export default TopicList;
