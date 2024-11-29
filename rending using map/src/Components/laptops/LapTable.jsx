import React from 'react'
import laptops from '../../../tasks/laptops'

const LapTable = () => {
  const LapData = laptops.filter((lap)=> lap.LaptopPrice > 500).map((lap) => (
    <tr key={lap.id}>
      <td className="border border-black px-4 py-2">{lap.createdAt}</td>
      <td className="border border-black px-4 py-2">{lap.LaptopName}</td>
      <td className="border border-black px-4 py-2"><img className='h-40 w-56' src={lap.LaptopImage} /></td>
      <td className="border border-black px-4 py-2">{lap.LaptopPrice}</td>
      <td className="border border-black px-4 py-2">{lap.LaptopCompany}</td>
      <td className="border border-black px-4 py-2">{lap.LaptopRamSize}</td>
      <td className="border border-black px-4 py-2">{lap.LaptopSSDSize}</td>
      <td className="border border-black px-4 py-2">{lap.id}</td>
    </tr>
  ));
  
  return (
    <div className="m-5">
        <table className="w-full text-left border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">Create Date </th>
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Image</th>
              <th className="border border-black px-4 py-2">Price</th>
              <th className="border border-black px-4 py-2">Company</th>
              <th className="border border-black px-4 py-2">Ram Size</th>
              <th className="border border-black px-4 py-2">SSD Size</th>
              <th className="border border-black px-4 py-2">id</th>
            </tr>
          </thead>
          <tbody>
            {LapData}
          </tbody>
        </table>
      </div>
  )
}

export default LapTable
