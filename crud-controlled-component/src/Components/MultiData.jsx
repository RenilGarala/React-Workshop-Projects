import React from "react";
import { useState } from "react";
import CarCard from "./CarCard";
const MultiData = () => {
  const [cardata, setCardata] = useState([]);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();

  let addCardata = () => {
    setCardata((data) => [...data,{name, surname}]);
    setName("");
    setSurname("");
  };
  return (
    <div>
      <>
        <div className="">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black text-gray-200 text-xl border-2 m-5 p-3 border-gray-600 rounded-xl w-6/12"
          />
          <input
            type="text"
            placeholder="Enter Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="bg-black text-gray-200 text-xl border-2 m-5 p-3 border-gray-600 rounded-xl w-6/12"
          />
          <button
            onClick={addCardata}
            className="text-white bg-green-700 p-3 px-5 text-xl rounded-lg"
          >
            Add
          </button>
        </div>
        <div className="mt-5 text-center flex  flex-wrap align-middle justify-center ">
          {cardata.map((item, index) => (
            <div className="bg-gray-800 text-gray-200 p-3 m-2 w-52 h-auto rounded-lg">
              <CarCard name={item.name} surname={item.surname}/>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default MultiData;
