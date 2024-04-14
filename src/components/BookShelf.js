import Book from "./Book";

const BookShelf = ({ title, books, callBackMoveBook }) => {
  // console.log(title, books[0].id);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map((book) => (
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

export default BookShelf;
