import React from "react";

const tasks = [
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
  return (
    <>
      <div className="center">
        <h1 className="header">To-Do</h1>
        <ul className="list">
          {tasks.map((task) => (
            <div className="items" key={task.ID}>
              <input type="checkbox" />
              <span className="task">{task.task}</span>
              <button className="button" type="Submit">Completed</button>
            </div>
          ))}
        </ul>
        <hr/>
        <input className="text_area" type="text" placeholder="Add new to-do" />
        <button className="Add-btn" type="submit">ADD</button>
      </div>
    </>
  );
}
