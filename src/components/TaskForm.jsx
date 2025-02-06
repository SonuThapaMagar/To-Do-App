import React, { useState } from 'react';
import Tag from './Tag';

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const selectTag = (tag) => {
    setTaskData((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);

    setTasks((prev) => (Array.isArray(prev) ? [...prev, taskData] : [taskData]));

    setTaskData({ task: "", status: "todo", tags: [] });
  };



  return (
    <header className="flex justify-center items-center mx-auto text-center py-8 mt-12">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-6 p-4 rounded-lg shadow-lg bg-gradient-to-br from-purple-200 to-indigo-400 text-black">
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="w-full text-xl bg-gray-200 border-rounded rounded p-4 mt-4 py-2"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="flex items-center justify-between">
          <div>
            {["HTML", "CSS", "JavaScript", "React"].map((tag) => (
              <Tag key={tag} tagName={tag} selectTag={selectTag} selected={taskData.tags.includes(tag)} />
            ))}
          </div>
          <div>
            <select name="status" value={taskData.status} className="font-sm bg-gray-100 cursor-pointer mx-2 py-2 rounded" onChange={handleChange}>
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="text-sm bg-purple-600 text-white mx-2 py-2 cursor-pointer rounded px-2">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
