import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
// const Greeting = () => {
//   return React.createElement(
//     "h1",
//     {},
//     React.createElement("h1", {}, "hello w")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
