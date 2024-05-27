import { createRef, FormEvent } from "react";
import useLibraryStore from "../store/useLibraryStore";
import { v4 as uuidv4 } from "uuid";

function BookForm() {
  const addBook = useLibraryStore((state) => state.addBook);

  const bookTitleRef = createRef<HTMLInputElement>();
  const bookAuthorRef = createRef<HTMLInputElement>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (bookTitleRef.current && bookAuthorRef.current) {
      if (
        bookTitleRef.current.value === "" ||
        bookAuthorRef.current.value === ""
      ) {
        return alert("Please provide book title and author");
      }

      const { value: title } = bookTitleRef.current;
      const { value: author } = bookAuthorRef.current;

      const newBook = {
        id: uuidv4(),
        title,
        author,
        status: "available",
      };
      addBook(newBook);

      if (bookTitleRef.current && bookAuthorRef.current) {
        bookTitleRef.current.value = "";
        bookAuthorRef.current.value = "";
      }
    }
  };

  return (
    <div className="container form-container">
      <form onSubmit={handleSubmit} className="form create-form">
        <div className="form-control">
          <label htmlFor="book-title" className="form-label">
            Add book title
          </label>

          <input
            ref={bookTitleRef}
            type="text"
            name="book"
            id="book-title"
            className="form-input"
          />
        </div>

        <div className="form-control">
          <label htmlFor="book-author" className="form-label">
            Author
          </label>

          <input
            ref={bookAuthorRef}
            type="text"
            name="book"
            id="book-author"
            className="form-input"
          />
        </div>

        <button type="submit" className="button save-button">
          Add
        </button>
      </form>
    </div>
  );
}

export default BookForm;
