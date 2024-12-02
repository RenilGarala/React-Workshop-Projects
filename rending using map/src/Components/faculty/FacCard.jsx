import React from 'react'
import faculties from '../../../tasks/facaulty'
import { Link } from 'react-router-dom'

const FacCard = () => {

  return (
    <div className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {faculties.map((fac,index) => (
        <div
          className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          <h3 className="text-xl pt-2 font-semibold text-gray-800">Name : {fac.FacultyName}</h3>
          <p className="text-sm text-gray-600 mt-1">Description: {fac.FacultyDescription}</p>
          <Link to={`/fac/${index}`}>
            <button className="bg-blue-500 p-2 px-3 text-white rounded-lg hover:bg-blue-600 m-1">
              Detail
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default FacCard
