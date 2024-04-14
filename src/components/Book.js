import { BookshelfNames } from "../core/Constants";
import { BookshelfTypes } from "../core/Enums";

const Book = ({ book, callBackMoveBook }) => {
    let bookThumbnail = book?.imageLinks?.smallThumbnail ?? "/no-image.jpg";

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ backgroundImage: `url("${bookThumbnail}")`, backgroundSize: "contain" }}></div>
                <div className="book-shelf-changer">
                    <select
                        value={book.shelf ? book.shelf : "none"}
                        onChange={async (e) => {
                            const shelf = e.target.value;
                            callBackMoveBook(book, shelf);
                        }}
                    >
                        <option value="x" disabled>
                            Move to...
                        </option>
                        <option value={BookshelfTypes.Reading}>{BookshelfNames.READING}</option>
                        <option value={BookshelfTypes.WantToRead}>{BookshelfNames.WANT_TO_READ}</option>
                        <option value={BookshelfTypes.Read}>{BookshelfNames.READ}</option>
                        <option value={BookshelfTypes.None}>{BookshelfNames.NONE}</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            {
                book.authors && (<div className="book-authors">{book.authors.join()}</div>)
            }
        </div>
    );
};

export default Book;
