import React from 'react'
import laptops from '../../../tasks/laptops'
const LapCard = () => {
  return (
    <div className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {laptops.filter((lap) =>lap.LaptopPrice>400).map((lap) => (
        <div
          className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          <img src={lap.LaptopImage} className="text-lg font-semibold text-gray-800"/>
          <h3 className="text-xl pt-2 font-semibold text-gray-800">Name : {lap.LaptopName}</h3>
          <p className="text-base font-semibold text-gray-800 mt-1">Price: {lap.LaptopPrice}</p>
          <p className="text-sm text-gray-600 mt-1">M Date: {lap.createdAt}</p>
          <p className="text-sm text-gray-600 mt-1">Company: {lap.LaptopCompany}</p>
          <p className="text-sm text-gray-600 mt-1">Ram: {lap.LaptopRamSize}</p>
          <p className="text-sm text-gray-600 mt-1">SSD: {lap.LaptopSSDSize}</p>
        </div>
      ))}
    </div>
  )
}

export default LapCard
