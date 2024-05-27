import { Book } from "../lib/definitions";
import useLibraryStore from "../store/useLibraryStore";

function BookItem({ id, title, author, status }: Book) {
  const issueBook = useLibraryStore((state) => state.issueBook);
  const returnBook = useLibraryStore((state) => state.returnBook);

  return (
    <li className="book">
      <div className="info">
        <p>{title}</p>
        <p>{author}</p>
      </div>

      <div className="actions">
        <button
          onClick={() => issueBook(id)}
          disabled={status === "issued"}
          className={`${status === "issued" && "bg-fade"} action-btn bg-red`}
        >
          Issue
        </button>

        <button
          onClick={() => returnBook(id)}
          disabled={status === "available"}
          className={`${
            status === "available" && "bg-fade"
          }  action-btn bg-green`}
        >
          Return
        </button>
      </div>
    </li>
  );
}

export default BookItem;
