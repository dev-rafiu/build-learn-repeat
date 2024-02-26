import PaginationOne from "./components/paginations/01";

function App() {
  return (
    <>
      <PaginationOne
        apiUrl="https://jsonplaceholder.typicode.com/posts"
        itemsPerPage={10}
      />
    </>
  );
}

export default App;
