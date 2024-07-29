/* eslint-disable react-refresh/only-export-components */
import FormContainer from "./components/formContainer";
import Navbar from "./components/nav-bar";
import ConnectedTaskList from "./components/taskList";

function App() {
  return (
    <>
      <Navbar />
      <FormContainer />
      <ConnectedTaskList />
    </>
  );
}

export default App;
