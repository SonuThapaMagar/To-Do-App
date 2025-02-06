import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const oldTasks=localStorage.getItem("tasks")

console.log(oldTasks);
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks)|| []);
  console.log("App tasks:", tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])
  

  const deleteTask = (taskIndex) => {
    setTasks((prev) => prev.filter((_, index) => index !== taskIndex));
  };

  return (
    <div className="grid">
      <TaskForm setTasks={setTasks} />
      <main className="flex justify-evenly p-4">
        <TaskColumn title="To Do" tasks={tasks} status="todo" deleteTask={deleteTask} />
        <TaskColumn title="Doing" tasks={tasks} status="doing" deleteTask={deleteTask} />
        <TaskColumn title="Done" tasks={tasks} status="done" deleteTask={deleteTask} />
      </main>
    </div>
  );first
};

export default App;
