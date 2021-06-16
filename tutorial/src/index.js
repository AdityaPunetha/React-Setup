import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}
const Person = () => <h2>aditya</h2>;
const Message = () => {
  return <p>para</p>;
};
ReactDom.render(<Greeting />, document.getElementById("root"));
