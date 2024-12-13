import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TaskForm({ onAddTask,onDeleteSelected }) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;
    onAddTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          className="text-area"
          required
          type="text"
          name="input-task"
          placeholder="Add new to-do"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="Add-btn" type="submit">
          ADD
        </button>
        <button className="del-btn" type="button" onClick={onDeleteSelected}><FontAwesomeIcon  icon={faTrash} /></button>
      </div>
    </form>
  );
}