import Task from "../task/Task";
import "./Column.css";

function Column({ state }) {
  return (
    <div className="column">
      <p> {state} </p>
      <Task title="Task 1" />
    </div>
  );
}

export default Column;
