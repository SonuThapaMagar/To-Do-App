import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log("App tasks:", tasks);

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
  );
};

export default App;
