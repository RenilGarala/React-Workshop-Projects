import React, { useState, useEffect } from "react";

const CarDetail = () => {
  const [carDetail, setCarDetail] = useState([]);

  useEffect(()=>{
    fetch("https://65d3828b522627d501090b34.mockapi.io/Car-Info")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCarDetail(data);
    });
  },[]);

  return (
    <div className="text-white m-5 font-mono">
      <h1 className="text-center py-5 text-2xl font-extrabold">Car Details</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {carDetail.map((car) => (
          <div
            key={car.id}
            className="p-3 w-52 bg-gray-800 rounded-lg text-center"
          >
            <div>
              <img className="mx-auto mb-3" src={car.imageUrl} alt={car.carName} />
            </div>
            <div className="font-semibold">Car Name: {car.carName}</div>
            <div>Type: {car.type}</div>
            <div>Color: {car.color}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDetail;
