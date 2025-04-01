import { useStore } from "zustand";
import Task from "../task/Task";
import "./Column.css";
import { shallow } from "zustand/shallow";

function Column({ state }) {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
  console.log(tasks);
  return (
    <div className="column">
      <p> {state} </p>
      <Task title="Task 1" />
    </div>
  );
}

export default Column;
