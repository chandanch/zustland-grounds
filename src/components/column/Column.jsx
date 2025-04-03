import { useStore } from "../../store";
import Task from "../task/Task";
import "./Column.css";
import { shallow } from "zustand/shallow";

function Column({ state }) {
  const tasks = useStore((store) => store.tasks, shallow);

  const filteredTasks = tasks.filter((task) => task.state === state);

  const addTask = useStore((store) => store.addTask);

  const addNewTask = () => {
    addTask(`Taskada ${state}${Math.random()}`, state);
  };

  return (
    <div className="column">
      <div className="column-header">
        <p> {state} </p>
        <button onClick={addNewTask}>Add</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
    </div>
  );
}

export default Column;
