import React from 'react'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'

const App = () => {
  return (
    <div className='grid'>
    <TaskForm></TaskForm>
      <main className="flex justify-evenly p-4">
        <TaskColumn title="To Do"></TaskColumn>
        <TaskColumn title="Doing"></TaskColumn>
        <TaskColumn title="Done"></TaskColumn>
      </main>
    </div>
  )
}

export default App
