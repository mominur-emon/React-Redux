/*import React, { useState } from "react";
//use state

const booksData = [
  { id: 1, name: "Ekta Ghater Majhi" },
  { id: 2, name: "Abar Dekha Hobe" },
  { id: 3, name: "Poth Harano Pothik" },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

export const Reducer = () => {
  const [books, setBooks] = useState(booksData);
  const [bookName, setBookName] = useState("");
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks((prevState) => {
      const newBook = { id: new Date().getTime().toString(), name: bookName };
      return [...prevState, newBook];
    });
    SetIsModalOpen(true);
    setModalText("book is added");
  };
  return (
    <div>
      <h3>Books List</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add Book</button>
      </form>

      {isModalOpen && <Modal modalText={modalText} />}

      {books.map((book) => {
        const { id, name } = book; //destructuring
        return <li key={id}>{name}</li>;
      })}
    </div>
  );
};
*/
/*----------------------------------------------------------------------------------------------*/
import React, { useState, useReducer } from "react";
import { reducer } from "./reducer";
//useReducer
const booksData = [
  { id: 1, name: "Ekta Ghater Majhi" },
  { id: 2, name: "Abar Dekha Hobe" },
  { id: 3, name: "Poth Harano Pothik" },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

export const UseReducer = () => {
  const [bookName, setBookName] = useState("");

  const [bookState, dispatch] = useReducer(reducer, {
    books: booksData,
    isModalOpen: false,
    modalText: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
  };
  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  return (
    <div>
      <h3>Books List</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add Book</button>
      </form>

      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      {bookState.books.map((book) => {
        const { id, name } = book; //destructuring
        return (
          <li key={id}>
            {name}
            <button
              onClick={() => {
                removeBook(id);
              }}
            >
              Remove
            </button>
          </li>
        );
      })}
    </div>
  );
};
