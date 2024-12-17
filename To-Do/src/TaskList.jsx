import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function TaskList({
  tasks,
  isCheck,
  onCheckChange,
  onDeleteTask,
  onEditTask,
}) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState("");

  const handleEditClick = (task) => {
    setEditingTaskId(task.ID);
    setEditedTaskText(task.task); 
  };

  const handleSaveClick = (taskId) => {
    onEditTask(taskId, editedTaskText);
    setEditingTaskId(editedTaskText); 
  };

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
          {editingTaskId === task.ID ? (
            <input
              type="text"
              value={editedTaskText}
              onChange={(e) => setEditedTaskText(e.target.value)}
              className="edit-input"
            />
          ) : (
            <span
              className="task"
              style={{
                textDecoration: isCheck[task.ID] ? "line-through" : "none",
                color: isCheck[task.ID] ? "grey" : "black",
              }}
            >
              {task.task}
            </span>
          )}

          {editingTaskId === task.ID ? (
            <button
              className="button"
              type="button"
              style={{ background: "blue", color: "white" }}
              onClick={() => handleSaveClick(task.ID)}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
          ) : (
            <button
              className="button"
              type="button"
              style={{ background: "transparent", color: "blue" }}
              onClick={() => handleEditClick(task)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
          )}

          <button
            className="button"
            type="button"
            style={{ background: "white", color: "red" }}
            onClick={() => onDeleteTask(task.ID)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      ))}
    </ul>
  );
}
