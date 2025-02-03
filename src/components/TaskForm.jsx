import React,  {useState} from 'react'
import Tag from './Tag'

const TaskForm = () => {
    const [task, setTask] = useState("");

    const handleTaskChange=e=>{
        setTask(e.target.value);
    }
    console.log(task);
    return (
        <header className='flex justify-center items-center mx-auto text-center py-6 mt-12'>
            <form action="" className='w-full max-w-3xl space-y-6 px-4 rounded'>
                <input type="text" className='w-100 text-xl bg-gray-200 border-rounded rounded p-4 mt-4 py-2' placeholder='Enter your task' onChange={handleTaskChange} />
                <div className='flex items-center justify-between'>
                    <div>
                        <Tag tagName="HTML"></Tag>
                        <Tag tagName="CSS"></Tag>
                        <Tag tagName="Java Script"></Tag>
                        <Tag tagName="React"></Tag>
                    </div>

                    <div>
                        <select name="" id="" className="font-sm bg-gray-100 cursor-pointer mx-2 py-2  rounded">
                            <option value="todo">To Do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        <button type='submit' className='text-sm bg-purple-600 text-white  mx-2 py-2 cursor-pointer rounded px-2'>Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm
