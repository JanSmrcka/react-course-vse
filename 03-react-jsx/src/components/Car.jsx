/* const Car = (props) => {
  return React.createElement("div", null, [
    React.createElement("h2", {}, props.brand),
    React.createElement("h3", {}, props.model),
    React.createElement("h3", {}, props.year),
    React.createElement("h3", {}, props.price),
  ]);
}; */

const Car = (props) => {
  return (
    <div>
      <h2>{props.brand}</h2>
      <h3>{props.model}</h3>
      <h3>{props.price}</h3>
      <h3>{props.color}</h3>
    </div>
  );
};

export default Car;
