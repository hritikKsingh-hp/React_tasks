import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TaskForm({ onAddTask, onDeleteSelected}) {
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (newTask.trim().length < 6) {
      setError("Task must be at least 6 characters long.");
      return;
    }
    if (newTask.length > 50) {
      setError("Task cannot exceed 50 characters.");
      return;
    }

    onAddTask(newTask); 
    setNewTask(""); 
    setError(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          className="text-area"
          type="text"
          name="input-task"
          placeholder="Add new to-do"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="Add-btn" type="submit">
          ADD
        </button>
        <button
          className="del-btn"
          type="button"
          onClick={onDeleteSelected}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
}
