import React from "react";
import { FaCheckCircle, FaStar, FaBullseye } from "react-icons/fa";

const TaskColumn = ({ title }) => {
    // Choose an icon based on the title
    const getIcon = (title) => {
        switch (title) {
            case "To Do":
                return <FaBullseye className="text-blue-500 mr-2" title="Goal" />;
            case "Doing":
                return <FaStar className="text-yellow-500 mr-2" title="In Progress" />;
            case "Done":
                return <FaCheckCircle className="text-green-500 mr-2" title="Completed" />;
            default:
                return null;
        }
    };

    return (
        <section className="w-40 m-4 rounded text-center text-black p-4 bg-gray-100 shadow-lg">
            <h2 className="text-lg font-bold flex items-center justify-center gap-2">
                {getIcon(title)}
                {title}
            </h2>
        </section>
    );
};

export default TaskColumn;
