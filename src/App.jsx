import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log("App tasks:", tasks);

  return (
    <div className="grid">
      <TaskForm setTasks={setTasks} />
      <main className="flex justify-evenly p-4">
        <TaskColumn title="To Do" tasks={tasks} status="todo" />
        <TaskColumn title="Doing" tasks={tasks} status="doing" />
        <TaskColumn title="Done" tasks={tasks} status="done" />
      </main>
    </div>
  );
};

export default App;
