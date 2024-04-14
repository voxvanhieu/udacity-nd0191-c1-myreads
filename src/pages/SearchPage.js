import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksApi from "../BooksAPI";

// Components 
import Book from "../components/Book";

const SearchPage = ({ watchingBooks, callBackMoveBook }) => {

    const [filteredBooks, setFilteredBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")

    const performSearch = () => {
        try {
            if (searchQuery === "") {
                return setFilteredBooks([]);
            }

            BooksApi
                .search(searchQuery, 50)
                .then(response => {
                    if (!response || response.error == 'empty query') {
                        return setFilteredBooks([]);
                    }
                    let bookIndex = new Map(watchingBooks.map(e => [e.id, e.shelf]));
                    response.forEach((book) => book.shelf = bookIndex.get(book.id) ?? 'none');
                    setFilteredBooks(response)
                })
        } catch (e) {
            return setFilteredBooks([])
        }
    }

    useEffect(() => {
        const delayTimeout = setTimeout(() => {
            performSearch();
        }, 1000)
        return () => clearTimeout(delayTimeout)
    }, [searchQuery]);

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to={"/"}>
                    close
                </Link>

                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        filteredBooks.map((book) => (
                            <li key={book.id}>
                                <Book book={book} callBackMoveBook={callBackMoveBook} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    );
};

export default SearchPage;
