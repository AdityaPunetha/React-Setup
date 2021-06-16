import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const books = [
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    img: "https://m.media-amazon.com/images/I/81cpDaCJJCL._AC_UY218_.jpg",
  },
  {
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    img: "https://m.media-amazon.com/images/I/81oZ2suDhdS._AC_UY218_.jpg",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return Book({ img, title, author });
      })}
    </section>
  );
}
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
