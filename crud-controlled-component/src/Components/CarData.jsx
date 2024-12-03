import React, { useState } from "react";
import { useState } from "react";

const CarData = () => {
  const [cardata, setCardata] = useState([]);
  const [value, setValue] = useState();
  let addCardata = () => {
    cardata;
    setCardata((data) => [...data, value]);
    setValue("");
  };
  return (
    <>
      <div className="">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          className="bg-black text-gray-200 text-xl border-2 m-5 p-3 border-gray-600 rounded-xl w-8/12"
        />
        <button
          onClick={addCardata}
          className="text-white bg-green-700 p-3 px-5 text-xl rounded-lg"
        >
          Add
        </button>
      </div>
      <div className="mt-5 text-center">
        {cardata.map((item, index) => (
          <div className="bg-gray-800 text-gray-200 p-3 m-2 rounded-lg">
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default CarData;
