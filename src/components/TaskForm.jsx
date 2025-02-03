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
                </div>
            </form>
        </header>
    )
}

export default TaskForm
