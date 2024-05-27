export type Book = {
  id: string;
  title: string;
  author: string;
  status: string;
};

export interface ILibrarybook {
  books: Book[];
  noOfAvailable: number;
  noOfIssued: number;

  addBook: (book: Book) => void;
  issueBook: (id: string) => void;
  returnBook: (id: string) => void;
  reset: () => void;
}
