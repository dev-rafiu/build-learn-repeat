import { create } from "zustand";
import { Book, ILibrarybook } from "../lib/definitions";
// import HandleLocalStorage from "./useLocalStorage";
// const { getStorage, setStorage } = HandleLocalStorage();

const setStorage = (books: Book[]) => {
  localStorage.setItem("books", JSON.stringify(books));
};

const getStorage = (): Book[] => {
  const books = localStorage.getItem("books");
  return books ? JSON.parse(books) : [];
};

const useLibraryStore = create<ILibrarybook>()((set, get) => ({
  books: getStorage(),
  noOfAvailable: getStorage().filter((item) => item.status === "available")
    .length,
  noOfIssued: getStorage().filter((item) => item.status === "issued").length,

  addBook: (book) => {
    const books = get().books;
    const updatedBooks = [...books, { ...book, status: "available" }];
    setStorage(updatedBooks);
    set({
      books: updatedBooks,
      noOfAvailable:
        get().books.filter((item) => item.status === "available").length + 1,
    });
  },

  issueBook: (id) => {
    const books = get().books;
    // map over books and return new books array(updatedBooks), if 'id' matches set book's status to "issues" else resturn book
    const updatedBooks = books?.map((book) => {
      if (book.id === id) {
        return { ...book, status: "issued" };
      }
      return book;
    });
    setStorage(updatedBooks);
    set((state) => ({
      books: updatedBooks,
      noOfAvailable:
        state.books.filter((item) => item.status === "available").length - 1,
      noOfIssued: state.noOfIssued + 1,
    }));
  },

  returnBook: (id) => {
    const books = get().books;
    // map over books and return new books array(updatedBooks), if 'id' matches set book's status to "available" else resturn book
    const updatedBooks = books?.map((book) => {
      if (book.id === id) {
        return { ...book, status: "available" };
      }
      return book;
    });
    setStorage(updatedBooks);
    set((state) => ({
      books: updatedBooks,
      noOfAvailable:
        state.books.filter((item) => item.status === "available").length + 1,
      noOfIssued:
        state.books.filter((item) => item.status === "issued").length - 1,
    }));
  },

  reset: () => {},
}));

export default useLibraryStore;
