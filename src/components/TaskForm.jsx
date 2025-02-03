import React,  {useState} from 'react'
import Tag from './Tag'

const TaskForm = () => {
    const [taskData, setTaskData] = useState({
        task:"",
        status:"todo"
    })

    const handleChange =(e)=>{
        const {name,value}=e.target;

        setTaskData(prev=>{
            return {...prev,[name]:value}
        })
        console.log(name,value);
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(taskData);
    }
    // const [task, setTask] = useState("");
    // const [status, setStatus] = useState("todo");

    // const handleTaskChange=e=>{
    //     setTask(e.target.value);
    // }

    // const handleStatusChange=e=>{
    //     setStatus(e.target.value);
    // }
    return (
        <header className='flex justify-center items-center mx-auto text-center py-6 mt-12'>
            <form action="" onSubmit={handleSubmit} className='w-full max-w-3xl space-y-6 px-4 rounded'>
                <input type="text" name='task' className='w-100 text-xl bg-gray-200 border-rounded rounded p-4 mt-4 py-2' placeholder='Enter your task' onChange={handleChange} />
                <div className='flex items-center justify-between'>
                    <div>
                        <Tag tagName="HTML"></Tag>
                        <Tag tagName="CSS"></Tag>
                        <Tag tagName="Java Script"></Tag>
                        <Tag tagName="React"></Tag>
                    </div>

                    <div>
                        <select name="status" id="" className="font-sm bg-gray-100 cursor-pointer mx-2 py-2  rounded" onChange={handleChange}>
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
