import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Finance = () => {
  const [carDetail, setCarDetail] = useState([]);
  const [value, setValue] = useState(false);
  useEffect(() => {
    fetch("https://65d3828b522627d501090b34.mockapi.io/finance")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCarDetail(data);
      });
  }, [value]);


  return (
    <div className="text-white m-5 font-mono">
      <h1 className="text-center py-5 text-2xl font-extrabold">Finance Details</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {carDetail.map((account,id) => (
          <div
            key={account.id}
            className="p-3 w-52 bg-gray-800 rounded-lg text-center"
          >
            <div className="font-semibold "><span className="text-red-400">Account Name:</span> {account.name}</div>
            <Link to={"/financeDetail/"+id} className="bg-green-600 w-fit py-1 px-2 rounded-lg">More Detail</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Finance;



