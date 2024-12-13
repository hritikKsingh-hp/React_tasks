import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function TaskList({
  tasks,
  isCheck,
  onCheckChange,
  onDeleteTask,
}) {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <div className="items" key={task.ID}>
          <input
            className="input-items"
            type="checkbox"
            name="checkbox"
            checked={isCheck[task.ID]}
            onChange={() => onCheckChange(task.ID)}
          />
          {/* <span className="task">{task.task}</span> */}
          {/* {isCheck[task.ID] && ( */}
          <span
            className="task"
            style={{
              textDecoration: isCheck[task.ID] ? "line-through" : "none",
              color: isCheck[task.ID] ? "grey" : "black",
            }}
          >
            {task.task}
            {/* <button className="button" type="button">
                Completed
                </button> */}
          </span>
          {/* <button className="button"><FontAwesomeIcon icon={faEdit}/></button> */}
          <button
            className="button"
            type="button"
            style={{ background: "white", color: "red" }}
            onClick={() => onDeleteTask(task.ID)}
          >
            <FontAwesomeIcon className="icon" icon={faXmark} />
          </button>
          <h1>hey</h1>
        </div>
      ))}
    </ul>
  );
}
