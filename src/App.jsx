
import React from 'react';
import { useState } from "react";
import BookCreate from './BookCreate';
import BookList from './BookList';

function App() {
  const [books, setBooks] = useState([]);

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random()*1000), title }
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBook} />
      
    </div>
  );
}

export default App;