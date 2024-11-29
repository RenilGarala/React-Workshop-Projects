import React from 'react'
import faculties from '../../../tasks/facaulty'
const FacTable = () => {
  return (
    <div className="m-5">
        <table className="w-full text-left border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">Create data </th>
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Image</th>
              <th className="border border-black px-4 py-2">initial</th>
              <th className="border border-black px-4 py-2">Description</th>
              <th className="border border-black px-4 py-2">DateOfBirth</th>
              <th className="border border-black px-4 py-2">id</th>
            </tr>
          </thead>
          <tbody>
            {faculties.map((fac) => (
              <tr key={fac.id}>
                <td className="border border-black px-4 py-2">{fac.createdAt}</td>
                <td className="border border-black px-4 py-2">{fac.FacultyName}</td>
                <td className="border border-black px-4 py-2"><img src={fac.FacultyImage} /></td>
                <td className="border border-black px-4 py-2">{fac.FacultyInitial}</td>
                <td className="border border-black px-4 py-2">{fac.FacultyDescription}</td>
                <td className="border border-black px-4 py-2">{fac.FacultyDateOfBirth}</td>
                <td className="border border-black px-4 py-2">{fac.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default FacTable
