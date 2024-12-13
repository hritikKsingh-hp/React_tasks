import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const initialTasks = [
  { ID: 1, task: "Organize your workspace" },
  { ID: 2, task: "Call a friend or family member" },
  { ID: 3, task: "Read a chapter of a book" },
  { ID: 4, task: "Meditate for 10 minutes" },
  { ID: 5, task: "Take a 15-minute walk" },
  { ID: 6, task: "Review your monthly budget" },
  { ID: 7, task: "Backup your phone or computer" },
  { ID: 8, task: "Do a quick workout" },
  { ID: 9, task: "Organize your email inbox" },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isCheck, setIsChecked] = useState({});
 
  const sortedTasks = [...tasks].sort((a, b) => {
    const aChecked = isCheck[a.ID] || false;
    const bChecked = isCheck[b.ID] || false;
    return aChecked - bChecked; 
  });

  const handleAddTask = (newTask) => {
    const newTaskObject = {
      ID: tasks.length + 1,
      task: newTask,
      
      
    };
    console.log(tasks.length);
    setTasks([newTaskObject, ...tasks]); 
  };

  const handleCheckChange = (id) => {
    setIsChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDeleteTask = (ID) => {
    setTasks(tasks.filter((task) => task.ID !== ID));
  };

  const handleDeleteSelected = () => {
    let result = confirm("Want to delete the completed task ?");
   if (result){
    const uncheckedTasks = tasks.filter((task) => !isCheck[task.ID]);
    setTasks(uncheckedTasks); 
    setIsChecked({}); 
  }}

  return (
    <div className="center">
      <h1 className="header">To-Do</h1>
      <TaskForm onAddTask={handleAddTask}
      onDeleteSelected={handleDeleteSelected} />
      <hr />
      <TaskList
        tasks={sortedTasks}
        isCheck={isCheck}
        onCheckChange={handleCheckChange}
        onDeleteTask={handleDeleteTask}
        
      />
    </div>
  );
}

  









// import React, { useState } from "react";

// const initialTasks = [
//   { ID: 1, task: "Organize your workspace" },
//   { ID: 2, task: "Call a friend or family member" },
//   { ID: 3, task: "Read a chapter of a book" },
//   { ID: 4, task: "Meditate for 10 minutes" },
//   { ID: 5, task: "Take a 15-minute walk" },
//   { ID: 6, task: "Review your monthly budget" },
//   { ID: 7, task: "Backup your phone or computer" },
//   { ID: 8, task: "Do a quick workout" },
//   { ID: 9, task: "Organize your email inbox" },
// ];

// export default function App() {
//   const [tasks, setTasks] = useState(initialTasks);
//   const [newTask, setNewTask] = useState("");

//   const handleAddTask = (e) => {
//     e.preventDefault();
//     if (newTask.trim() === "") return;
//     const newTaskObject = {
//       ID: tasks.length + 1,
//       task: newTask,
//     };
//     setTasks([ newTaskObject,...tasks]);
//     setNewTask("");
//   };

//   const [isCheck, setIsChecked] = useState(false);
//   const handlecheckchange = (id) => {
//     setIsChecked((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleDeleteTask = (ID) => {
//     setTasks(tasks.filter((task) => task.ID !== ID));
//   }

//   return (
//     <>
//       <div className="center">
//         <h1 className="header">To-Do</h1>
//         <form onSubmit={handleAddTask} onClick={handleAddTask}>
//           <div className="input-container">
//             <input
//               className="text-area"
//               required
//               type="text"
//               placeholder="Add new to-do"
//               value={newTask}
//               onChange={(e) => setNewTask(e.target.value)}
//             />
//             <button className="Add-btn" type="submit">
//               ADD
//             </button>
//           </div>
//         </form>
//         <hr />
//         <ul className="list">
//           {tasks.map((task) => (
//             <div className="items" key={task.ID}>
//               <input className="input-items"
//                 type="checkbox"
//                 value={task.ID}
//                 onChange={() => handlecheckchange([task.ID])}
//               />
//               <span className="task">{task.task}</span>
              
//                 {isCheck[task.ID] && (
//                   <button className="button" type="Submit">
//                     Completed
//                   </button>
                  
//                 )}
//                   <button className="button" type="Submit" style={{background:"white", color:"red"}} onClick={()=>handleDeleteTask(task.ID)}>
//                     X
//                   </button>
//             </div>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
