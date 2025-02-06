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
    <header className="flex justify-center items-center mx-auto text-center py-6 sm:py-8 md:py-10">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-3xl p-6 rounded-lg shadow-lg bg-gradient-to-br from-purple-200 to-indigo-400 text-black mt-0"
      >
        {/* Input Field */}
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="w-full text-lg sm:text-xl bg-gray-200 rounded-md px-4 py-3 sm:py-4 focus:outline-none"
          placeholder="Enter your task"
          onChange={handleChange}
        />

        {/* Tags, Select & Button in One Row */}
        <div className="flex flex-wrap items-center gap-2 mt-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 min-w-0">
            {["HTML", "CSS", "JavaScript", "React"].map((tag) => (
              <Tag key={tag} tagName={tag} selectTag={selectTag} selected={taskData.tags.includes(tag)} />
            ))}
          </div>

          {/* Select Status */}
          <select 
            name="status" 
            value={taskData.status} 
            className="text-base bg-gray-100 cursor-pointer px-4 py-2 rounded-md focus:outline-none"
            onChange={handleChange}
          >
            <option value="todo">To Do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="text-lg bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-all"
          >
            Add Task
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
