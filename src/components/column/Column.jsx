import { useStore } from "zustand";
import Task from "../task/Task";
import "./Column.css";

function Column({ state }) {
  const tasks = useStore((store) => store.tasks);
  const filteredTasks = tasks.filter((task) => task.state === state);
  console.log(filteredTasks);
  return (
    <div className="column">
      <p> {state} </p>
      <Task title="Task 1" />
    </div>
  );
}

export default Column;
