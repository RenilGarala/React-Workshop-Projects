import React from 'react'
import todos from "../../../tasks/todos";

const TodosCard = () => {
  return (
    <div className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {todos.map((todos) => (
        <div
          className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          <img src={todos.src} className="text-lg font-semibold text-gray-800"/>
          <h3 className="text-lg font-semibold text-gray-800">User ID{todos.userId}</h3>
          <p className="text-sm text-gray-600 mt-1">ID: {todos.id}</p>
          <p className="text-sm text-gray-600 mt-1">Title: {todos.title}</p>
          <p className="text-sm text-gray-600 mt-1">Completed: {todos.completed? "True" : "False"}</p>
        </div>
      ))}
    </div>
  )
}

export default TodosCard
