import classNames from "classnames";
import "./Task.css";
import { useStore } from "../../store";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";

function Task({ title }) {
  const tasks = useStore((store) => store.tasks);
  const task = tasks.find((task) => task.title === title);

  const deleteTask = useStore((store) => store.deleteTask);
  const editTask = useStore((store) => store.editTask);

  return (
    <div className="task">
      <div>{task.title}</div>
      <div className="bottom-wrapper">
        <div>
          <img src={deleteIcon} onClick={() => deleteTask(task.title)} />
        </div>
        <div>
          <img src={editIcon} onClick={() => deleteTask(task.title)} />
        </div>
        <div className={classNames("status", task.state)}> {task.state} </div>
      </div>
    </div>
  );
}

export default Task;
