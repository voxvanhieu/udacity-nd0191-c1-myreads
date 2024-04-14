import { Link } from "react-router-dom";
import { BookshelfNames as ShelfName } from "../core/Constants";
import { BookshelfTypes as ShelfType } from "../core/Enums";

// Components
import BookShelf from "../components/BookShelf";

const LibraryPage = ({ books, moveBookCallBack }) => {

    const bookshelves = [
        { name: ShelfType.Reading, text: ShelfName.READING },
        { name: ShelfType.WantToRead, text: ShelfName.WANT_TO_READ },
        { name: ShelfType.Read, text: ShelfName.READ }
    ]

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        bookshelves.map(shelf =>
                            <BookShelf
                                title={shelf.text}
                                books={books.filter((book) => book.shelf === shelf.name)}
                                moveBookCallBack={moveBookCallBack}
                            />
                        )
                    }
                </div>
            </div>
            <div className="open-search">
                <Link to={"search"}>Add a book</Link>
            </div>
        </div>
    );
};

export default LibraryPage;
