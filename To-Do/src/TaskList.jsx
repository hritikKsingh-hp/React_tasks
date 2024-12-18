import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function TaskList({ tasks, isCheck, onCheckChange, onDeleteTask, onEditTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [error, setError] = useState("");

  const handleEdit = (task) => {
    setEditingTaskId(task.ID);
    setEditedTask(task.task); // Pre-fill the current task for editing
    setError(""); // Reset error state
  };

  const handleSaveEdit = (taskId) => {
    // Validation logic for edited task
    if (editedTask.trim().length < 6) {
      setError("Task must be at least 6 characters long.");
      return;
    }
    if (editedTask.length > 50) {
      setError("Task cannot exceed 50 characters.");
      return;
    }

    onEditTask(taskId, editedTask); // Update the task
    setEditingTaskId(null); // Exit editing mode
    setEditedTask(""); // Reset input
    setError(""); // Reset error
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
            <div style={{ flex: 1 }}>
              <input
                className="edit-input"
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
              <button
                className="button"
                style={{ background: "green" }}
                onClick={() => handleSaveEdit(task.ID)}
              >
                Save
              </button>
              {error && <div className="error-message">{error}</div>}
            </div>
          ) : (
            <>
              <span
                className="task"
                style={{
                  textDecoration: isCheck[task.ID] ? "line-through" : "none",
                  color: isCheck[task.ID] ? "grey" : "black",
                }}
              >
                {task.task}
              </span>
              <div className="button-container">
                <button
                  className="button"
                  style={{ background: "blue" }}
                  onClick={() => handleEdit(task)}
                >
                  <FontAwesomeIcon icon={faPen} />
                </button>
                <button
                  className="button"
                  style={{ background: "red" }}
                  onClick={() => onDeleteTask(task.ID)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </ul>
  );
}






// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark} from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { faEdit } from "@fortawesome/free-solid-svg-icons";

// export default function TaskList({
//   tasks,
//   isCheck,
//   onCheckChange,
//   onDeleteTask,
//   onEditTask,
  
// }) {
//   const [editingTaskId, setEditingTaskId] = useState(null);
//   const [editedTaskText, setEditedTaskText] = useState("");

//   const handleEditClick = (task) => {
//     setEditingTaskId(task.ID);
//     setEditedTaskText(task.task); 
//   };

//   const handleSaveClick = (taskId) => { 
    
//     onEditTask(taskId, editedTaskText);
//     setEditingTaskId(editedTaskText); 
//   };

//   return (
//     <ul className="list">
//       {tasks.map((task) => (
//         <div className="items" key={task.ID}>
//           <input
//             className="input-items"
//             type="checkbox"
//             name="checkbox"
//             checked={isCheck[task.ID]}
//             onChange={() => onCheckChange(task.ID)}
//           />
//           {editingTaskId === task.ID ? (
//             <input
//               type="text"
//               value={editedTaskText}
//               onChange={(e) => setEditedTaskText(e.target.value)}
//               className="edit-input"
//             />
//           ) : (
//             <span
//               className="task"
//               style={{
//                 textDecoration: isCheck[task.ID] ? "line-through" : "none",
//                 color: isCheck[task.ID] ? "grey" : "black",
//               }}
//             >
//               {task.task}
//             </span>
//           )}

//           {editingTaskId === task.ID ? (
//             <button
//               className="button"
//               type="button"
//               style={{ background: "blue", color: "white" }}
//               onClick={() => handleSaveClick(task.ID)}
//             >
//               <FontAwesomeIcon icon={faCheck} />
//             </button>
//           ) : (
//             <button
//               className="button"
//               type="button"
//               style={{ background: "transparent", color: "blue" }}
//               onClick={() => handleEditClick(task)}
//             >
//               <FontAwesomeIcon icon={faEdit} />
//             </button>
//           )}

//           <button
//             className="button"
//             type="button"
//             style={{ background: "white", color: "red" }}
//             onClick={() => onDeleteTask(task.ID)}
//           >
//             <FontAwesomeIcon icon={faXmark} />
//           </button>{error && <div className="error-message">{error}</div>}
//         </div>
//       ))}
//     </ul>
//   );
// }
