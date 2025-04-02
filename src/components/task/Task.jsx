import classNames from "classnames";
import "./Task.css";
import { useStore } from "zustand";

function Task({ title }) {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  return (
    <div className="task">
      <div>{title}</div>
      <div className="bottom-wrapper">
        <div></div>
        <div className={classNames("status", task.status)}> {task.status} </div>
      </div>
    </div>
  );
}

export default Task;
