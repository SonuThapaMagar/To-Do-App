// src/App.jsx
import React from 'react'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 max-w-sm bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Hello, Tailwind CSS in React!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          This is a test to see if Tailwind CSS is working properly in your React project.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Test Button
        </button>
      </div>
    </div>
  )
}

export default App
