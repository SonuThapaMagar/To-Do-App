import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import "./App.css"; 
import "./index.css";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (taskToDelete) => {
    setTasks((prev) => prev.filter((task) => task !== taskToDelete));
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-200 text-white flex flex-col items-center">
      {/* App Title */}
      <h2
        className="text-center mt-6 text-3xl sm:text-4xl font-bold text-purple-400"
        style={{ fontFamily: "'Bungee Shade', cursive" }}
      >
        To Do App
      </h2>

      {/* Task Form */}
      <TaskForm setTasks={setTasks} />

      {/* Task Columns (Responsive Grid) */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-5xl p-0">
        <TaskColumn title="To Do" tasks={tasks} status="todo" deleteTask={deleteTask} />
        <TaskColumn title="Doing" tasks={tasks} status="doing" deleteTask={deleteTask} />
        <TaskColumn title="Done" tasks={tasks} status="done" deleteTask={deleteTask} />
      </main>
    </div>
  );
};

export default App;
