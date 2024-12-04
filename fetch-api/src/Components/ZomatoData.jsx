import React, { useState, useEffect } from "react";

const ZomatoData = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("https://www.zomato.com/webroutes/auth/init")
      .then((response) => response.json())
      .then((data) => {
        setFood(data.all_country_code || []); // Ensure data structure is correct
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="text-white m-5 font-mono">
      <h1 className="text-center py-5 text-2xl font-extrabold">
        Zomato Country Data
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {food.map((country) => (
          <div
            key={country.countryId} // Ensure you have a unique key
            className="p-3 w-52 bg-gray-800 rounded-lg text-center"
          >
            <div>
              <img className="mx-auto mb-3" src={country.flagImgUrl} />
            </div>
            <div className="font-semibold ">
              <span className="text-blue-400">Account Name:</span> {country.name}
            </div>
            <div>
              <span className="text-blue-400">ISD Code: </span>
              {country.isdCode}
            </div>
            <div>
              <span className="text-blue-400">Currency: </span>
              {country.isoCurrencyCode}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZomatoData;
