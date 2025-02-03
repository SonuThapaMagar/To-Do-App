import React from 'react'

const TaskForm = () => {
    return (
        <header className='mx-auto text-center p-4 mt-12'>
            <form action="">
                <input type="text" className='' placeholder='Enter your task' />

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
