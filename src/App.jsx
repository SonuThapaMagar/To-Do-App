import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const oldTasks = localStorage.getItem("tasks")

console.log(oldTasks);
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  console.log("App tasks:", tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  const deleteTask = (taskToDelete) => {
    setTasks((prev) => prev.filter(task => task !== taskToDelete));
  };

  return (
    <div>
      <h2 className="text-center mt-8 text-3xl font-bold text-purple-700 animate-pulse" style={{ fontFamily: "'Bungee Shade', cursive" }}>
        To Do App
      </h2>
      <div className="grid">
        <TaskForm setTasks={setTasks} />
        <main className="flex justify-evenly p-4">
          <TaskColumn title="To Do" tasks={tasks} status="todo" deleteTask={deleteTask} />
          <TaskColumn title="Doing" tasks={tasks} status="doing" deleteTask={deleteTask} />
          <TaskColumn title="Done" tasks={tasks} status="done" deleteTask={deleteTask} />
        </main>
      </div>
    </div>
  ); first
};

export default App;
