const Heading = ({ tag, text }) => {
  const Tag = tag ? tag : "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
