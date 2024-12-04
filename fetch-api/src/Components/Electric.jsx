import React, { useState, useEffect } from "react";

const Electric = () => {
  const [electric, setElectric] = useState([]);
  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setElectric(data);
      });
  }, []);
  return (
    <div className="text-white m-5 font-mono">
      <h1 className="text-center py-5 text-2xl font-extrabold">
        Electric Gedgets
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {electric.map((ele) => (
          <div
            key={ele.id}
            className="p-3 w-52 bg-gray-800 rounded-lg text-center"
          >
            <div className="font-semibold ">
              <span className="text-blue-400">Account Name:</span> {ele.name}
            </div>
            <div>
              <span className="text-blue-400">Type: </span>
              {ele.data?.price}
            </div>
            <div>
              <span className="text-blue-400">Color: </span>
              {ele.data?.color}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electric;
