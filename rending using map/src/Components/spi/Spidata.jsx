import React from "react";
import spiData from "../../../tasks/spiData";

const Spidata = () => {
  return (
    <div>
      <div className="mt-51">
        {/* <button className="p-2 m-5  bg-blue-500 text-white hover:bg-blue-700">
          Above 5
        </button>
        <button className="p-2 m-5 bg-blue-500 text-white hover:bg-blue-700">
          Below 5
        </button>
        <button className="p-2 m-5 bg-blue-500 text-white hover:bg-blue-700">
           All
        </button> */}
      </div>
      <div className="m-5">
        <table className="w-full text-left border-collapse border border-black">
          <thead>
            <tr>
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Language</th>
              <th className="border border-black px-4 py-2">ID</th>
              <th className="border border-black px-4 py-2">Bio</th>
              <th className="border border-black px-4 py-2">SPI</th>
            </tr>
          </thead>
          <tbody>
            {spiData.map((stu) => (
              <tr key={stu.id}>
                <td className="border border-black px-4 py-2">{stu.name}</td>
                <td className="border border-black px-4 py-2">
                  {stu.language}
                </td>
                <td className="border border-black px-4 py-2">{stu.id}</td>
                <td className="border border-black px-4 py-2">{stu.bio}</td>
                <td className="border border-black px-4 py-2">{stu.spi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Spidata;
