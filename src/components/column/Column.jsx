import { useState } from "react";
import { useStore } from "../../store";
import Task from "../task/Task";
import "./Column.css";
import { shallow } from "zustand/shallow";

function Column({ state }) {
  const tasks = useStore((store) => store.tasks, shallow);

  const filteredTasks = tasks.filter((task) => task.state === state);

  const addTask = useStore((store) => store.addTask);

  const addNewTask = () => {
    setOpen(false);
    addTask(text, state);
    setText("");
  };

  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="column">
      <div className="column-header">
        <p> {state} </p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.title} title={task.title} />
      ))}
      {open && (
        <div className="modal">
          <div className="modal-content">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter task title"
            />
            <button onClick={addNewTask}>Add Task</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Column;
