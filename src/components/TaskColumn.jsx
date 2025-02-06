import React from "react";
import { FaCheckCircle, FaStar, FaBullseye } from "react-icons/fa";
import TaskCard from "./TaskCard";

const icons = {
  "To Do": <FaBullseye className="text-blue-500" title="Goal" />,
  "Doing": <FaStar className="text-yellow-500" title="In Progress" />,
  "Done": <FaCheckCircle className="text-green-500" title="Completed" />,
};

const TaskColumn = ({ title, tasks = [], status, deleteTask }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);
  console.log(`Column ${title} (${status}) - Filtered Tasks:`, filteredTasks);

  return (
    <section className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 min-w-[250px] text-black bg-blue-100 shadow-lg rounded-lg p-4 mb-8">
      <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2 justify-center mb-4">
        {icons[title]} {title}
      </h2>

      <div className="flex flex-col gap-4">
        {filteredTasks.map((task) => (
          <TaskCard 
            key={task.task} 
            title={task.task} 
            tags={task.tags} 
            deleteTask={() => deleteTask(task)} 
          />
        ))}
      </div>
    </section>
  );
};

export default TaskColumn;
