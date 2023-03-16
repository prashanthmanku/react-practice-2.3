const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;
  return <p className={`box ${className}`}>{text}</p>;
};

const element = (
  //  Write your code here.
  <div className="boxes-bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="Small" className="bg-small" />
      <Box text="Medium" className="bg-medium" />
      <Box text="Large" className="bg-large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
