import React from 'react'
import todos from "../../../tasks/todos";


const TodosTable = () => {
  return (
    <div>
      <div className="m-5">
        <table className="w-full text-left border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">User ID</th>
              <th className="border border-black px-4 py-2">id</th>
              <th className="border border-black px-4 py-2">Title</th>
              <th className="border border-black px-4 py-2">Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todos) => (
              <tr key={todos.id}>
                <td className="border border-black px-4 py-2">{todos.userId}</td>
                <td className="border border-black px-4 py-2">{todos.id}</td>
                <td className="border border-black px-4 py-2">{todos.title}</td>
                <td className="border border-black px-4 py-2">{todos.completed? "True": "False"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TodosTable
