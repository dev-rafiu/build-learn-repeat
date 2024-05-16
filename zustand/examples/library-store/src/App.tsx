import { useEffect } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import useLibraryStore from "./store/useLibraryStore";

function App() {
  const reset = useLibraryStore((state) => state.reset);

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <main className="main">
      <h1>Library books</h1>

      <BookForm />
      <BookList />
    </main>
  );
}

export default App;
