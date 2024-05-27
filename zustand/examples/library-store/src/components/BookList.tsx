import useLibraryStore from "../store/useLibraryStore";
// import HandleLocalStorage from "../store/useLocalStorage";

import BookItem from "./Book";

function BookList() {
  //   const {} = useLibraryStore((state) => ({
  //     books: state.books,
  //     noOfAvailable: state.noOfAvailable,
  //     noOfIssued: state.noOfIssued,
  //     issueBook: state.issueBook,
  //     returnBook: state.returnBook,
  //   }));

  const books = useLibraryStore((state) => state.books);
  const noOfIssued = useLibraryStore((state) => state.noOfIssued);
  const noOfAvailable = useLibraryStore((state) => state.noOfAvailable);

  //   const { getStorage } = HandleLocalStorage();
  //   const noOfAvailable = getStorage().filter(
  //     (item) => item.status === "available"
  //   ).length;

  //   const noOfIssued = getStorage().filter(
  //     (item) => item.status === "issued"
  //   ).length;

  return (
    <div className="container book-list-container">
      <header className="book-list-container_header">
        <p>
          Available:
          <span className="count">{noOfAvailable}</span>
        </p>
        <p>
          Issued:
          <span className="count">{noOfIssued}</span>
        </p>
      </header>

      <ul className="book-list">
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
