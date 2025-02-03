import React from 'react'

const App = () => {
  return (
    <div className='grid'>
      <header className='mx-auto text-center p-4 mt-12'>Header</header>

      <main className="flex justify-evenly p-4">
        <section className="bg-blue-400 w-40 m-4 rounded text-center">To Do</section>
        <section className="bg-blue-400 w-40 m-4 rounded text-center">Doing</section>
        <section className="bg-blue-400 w-40 m-4 rounded text-center">Completed</section>
      </main>
    </div>
  )
}

export default App
