import React from "react";
import ReactDom from "react-dom";

function Booklist() {
  return (
    <section>
      <Book />
    </section>
  );
}
//
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY218_.jpg"
    alt=""
  />
);
const Title = () => <h1>The Psychology of Money</h1>;
const Author = () => <h4>Morgan Housel </h4>;
ReactDom.render(<Booklist />, document.getElementById("root"));
