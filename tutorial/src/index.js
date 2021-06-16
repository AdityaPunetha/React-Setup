import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const firstBook = {
  title: "The Psychology of Money",
  author: "Morgan Housel",
  img: "https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY218_.jpg",
};
const secondBook = {
  title: "The Secret Garden",
  author: "Frances Hodgson Burnett",
  img: "https://m.media-amazon.com/images/I/81oZ2suDhdS._AC_UY218_.jpg",
};
function Booklist() {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
    </section>
  );
}
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
