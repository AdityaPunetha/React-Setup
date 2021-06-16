import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div onClick>
      <h3>hello</h3>
      <ul>
        <li>
          <a href="#">, hemlo</a>
        </li>
        <img src="" alt="" />
        <input type="text" name="" id="" />
      </ul>
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
