import React from "react";
import ReactDom from "react-dom";
import "./index.css";
function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}
const author = "Morgan Housel";
const Book = () => {
  const title = "The Psychology of Money";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY218_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
