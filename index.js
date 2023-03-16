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
/*solution





*/
/*
const Box = props => {
  const {text, className} = props
  
  return (
    <div className={`box ${className}`}>
      <p className="box-title">{text}</p>
    </div>
  )
}

const element = (
  <div className="boxes-app-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="Small" className="small-box" />
      <Box text="Medium" className="medium-box" />
      <Box text="Large" className="large-box" />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
*/
