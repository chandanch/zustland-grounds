import classNames from "classnames";
import "./Task.css";

const status = "DONE"; // This should be passed as a prop or derived from the task data

function Task({ title }) {
  return (
    <div className="task">
      <div>{title}</div>
      <div className="bottom-wrapper">
        <div></div>
        <div className={classNames("status", status)}> {status} </div>
      </div>
    </div>
  );
}

export default Task;
