import { Button } from "@mui/material";
import React from "react";

import "./Book.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Book = (props) => {
  const history = useNavigate();
  const { id, name, author, description, price, image } = props.book;
  const deleteHandler = () => {
    axios
      .delete("http://localhost:5000/books/$(_id)")
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <div className="card">
      <h1>{id}</h1>
      <img src={image} alt="name" />
      <article>By {author}</article>
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>Rs.{price}</h2>
      <Button LinkComponent={Link} to={"/books/${_id}"} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button onClick={deleteHandler} to={"/books/${_id}"} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
