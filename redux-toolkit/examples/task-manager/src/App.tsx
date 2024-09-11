import { useEffect } from "react";
import FormContainer from "./components/formContainer";
import Navbar from "./components/nav-bar";
import { getTotalTasks } from "./slice/task/taskSlice";
import { useDispatch } from "react-redux";
import TaskList from "./components/taskList";
import { useAppSelector } from "./hooks";

function App() {
  const dispatch = useDispatch();
  const { tasks } = useAppSelector((store) => store.tasks);

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
