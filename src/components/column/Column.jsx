import { useStore } from "zustand";
import Task from "../task/Task";
import "./Column.css";
import { shallow } from "zustand/shallow";

function Column({ state }) {
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );

  const renderTasks = () => {
    return tasks.map((task) => <Task key={task.title} title={task.title} />);
  };

  return (
    <div className="column">
      <p> {state} </p>
      {renderTasks()}
    </div>
  );
}

export default Column;
