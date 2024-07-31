import { useEffect } from "react";
import FormContainer from "./components/formContainer";
import Navbar from "./components/nav-bar";
import { getTotalTasks } from "./slice/task/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "./components/taskList";

function App() {
  const dispatch = useDispatch();
  const { tasks } = useSelector((store) => store.tasks);

  useEffect(() => {
    dispatch(getTotalTasks());
  }, [tasks]);

  return (
    <>
      <Navbar />
      <FormContainer />
      <TaskList />
    </>
  );
}

export default App;
