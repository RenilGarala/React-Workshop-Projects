import React from 'react'
import faculties from '../../../tasks/facaulty'

const FacCard = () => {

  return (
    <div className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {faculties.map((fac) => (
        <div
          className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          <img src={fac.FacultyImage} className="text-lg font-semibold text-gray-800"/>
          <h3 className="text-xl pt-2 font-semibold text-gray-800">Name : {fac.FacultyName}</h3>
          <p className="text-base font-semibold text-gray-800 mt-1">Date: {fac.createdAt}</p>
          <p className="text-sm text-gray-600 mt-1">Initial: {fac.FacultyInitial}</p>
          <p className="text-sm text-gray-600 mt-1">Description: {fac.FacultyDescription}</p>
          <p className="text-sm text-gray-600 mt-1">D.O.B: {fac.FacultyDateOfBirth}</p>
          <p className="text-sm text-gray-600 mt-1">ID: {fac.id}</p>
        </div>
      ))}
    </div>
  )
}

export default FacCard
