import React from "react";
import ReactDom from "react-dom";
import "./index.css";
function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
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
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Morgan Housel{" "}
  </h4>
);
ReactDom.render(<Booklist />, document.getElementById("root"));
