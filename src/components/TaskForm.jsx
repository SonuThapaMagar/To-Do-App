import React from 'react'

const TaskForm = () => {
    return (
        <header className='flex justify-center items-center mx-auto text-center py-6 mt-12'>
            <form action="" className='w-full max-w-3xl space-y-6 px-4 rounded'>
                <input type="text" className='w-100 text-xl bg-gray-200 border-rounded p-4 mt-4 py-2' placeholder='Enter your task' />
                <div>
                    <button>HTML</button>
                    <button>CSS</button>
                    <button>JavaScript</button>
                    <button>React</button>

                    <select name="" id="" className="task_status">
                        <option value="todo">To Do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                    <button type='submit' className='task_submit'>Add Task</button>
                </div>
            </form>
        </header>
    )
}

export default TaskForm
