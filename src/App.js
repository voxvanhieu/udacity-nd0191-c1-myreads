import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as BooksApi from "./BooksAPI";

// Components 
import NotFound from "./pages/NotFound";
import LibraryPage from "./pages/LibraryPage";
import SearchPage from "./pages/SearchPage";

function App() {
  // Initialize state to manage books data in component
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksApi.getAll().then((response) => {
      if (response) {
        setBooks(response)
      }
    });
  }, [])

  const moveBook = (book, shelf) => {
    BooksApi.update(book, shelf).then(() => {
      book.shelf = shelf;
      setBooks(books.filter((b) => b.id !== book.id).concat(book));
    });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LibraryPage books={books} callBackMoveBook={moveBook} />} />
          <Route path="/search" element={<SearchPage watchingBooks={books} callBackMoveBook={moveBook} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
