import { Book } from "../lib/definitions";

function HandleLocalStorage() {
  const setStorage = (books: Book[]) => {
    localStorage.setItem("books", JSON.stringify(books));
  };

  const getStorage = (): Book[] => {
    const books = localStorage.getItem("books");
    return books ? JSON.parse(books) : [];
  };

  return { setStorage, getStorage };
}

export default HandleLocalStorage;
