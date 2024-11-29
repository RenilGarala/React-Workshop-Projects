import React from "react";
import spiData from "../../../tasks/spiData";

const TableData = () => {
  return (
    <div className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {spiData.map((stu) => (
        <div
          key={stu.id}
          className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          <img src={stu.src} className="text-lg font-semibold text-gray-800"/>
          <h3 className="text-lg font-semibold text-gray-800">{stu.name}</h3>
          <p className="text-sm text-gray-600 mt-1">Language: {stu.language}</p>
          <p className="text-sm text-gray-600 mt-1">ID: {stu.id}</p>
          <p className="text-sm text-gray-600 mt-1">ID: {stu.bio}</p>
          <p className="text-sm text-gray-900 font-medium mt-2">SPI: {stu.spi}</p>
        </div>
      ))}
    </div>
  );
};

export default TableData;
