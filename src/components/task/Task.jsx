import classNames from "classnames";
import "./Task.css";
import { useStore } from "../../store";

function Task({ title }) {
  const tasks = useStore((store) => store.tasks);
  const task = tasks.find((task) => task.title === title);

  return (
    <div className="task">
      <div>{task.title}</div>
      <div className="bottom-wrapper">
        <div></div>
        <div className={classNames("status", task.state)}> {task.state} </div>
      </div>
    </div>
  );
}

export default Task;
