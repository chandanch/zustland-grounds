import "./Task.css";

const status = "PLANNED";

function Task({ title }) {
  return (
    <div className="task">
      <div>{title}</div>
      <div className="bottom-wrapper">
        <div></div>
        <div className="status"> {status} </div>
      </div>
    </div>
  );
}

export default Task;
