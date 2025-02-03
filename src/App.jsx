import React from 'react'

const App = () => {
  return (
    <div className='grid'>
      <main className="flex justify-evenly p-4">
        <section className="bg-blue-400 w-40 m-4 rounded text-center">To Do</section>
        <section className="bg-blue-400 w-40 m-4 rounded text-center">Doing</section>
        <section className="bg-blue-400 w-40 m-4 rounded text-center">Completed</section>
      </main>
    </div>
  )
}

export default App
