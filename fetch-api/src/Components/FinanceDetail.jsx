import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const FinanceDetail = () => {
  const navigate = useNavigate();
  const [financeData, setFinanceData] = useState({});
  const { id } = useParams();
  const apiurl = "https://65d3828b522627d501090b34.mockapi.io/finance/";

  useEffect(() => {
    fetch(apiurl + id)
      .then((response) => response.json())
      .then((data) => {
        setFinanceData(data);
      });
  }, [id]);

  return (
    <div className="text-white flex justify-center">
      <div className="p-3 w-52 bg-gray-800 rounded-lg text-center">
        <div className="font-semibold">
          <span className="text-red-400">Account Name:</span> {financeData.name}
        </div>
        <div>
          <span className="text-red-400">Type:</span> {financeData.type}
        </div>
        <div>
          <span className="text-red-400">Account ID:</span> {financeData.id}
        </div>
        <div>
          <span className="text-red-400">Amount:</span> {financeData.amount}
        </div>
        <div>
          <Link
            to="/finance"
            className="bg-green-600 w-fit py-1 px-2 rounded-lg"
          >
            Back
          </Link>
        </div>
        <button
          className="bg-red-600 w-fit py-1 px-2 rounded-lg"
          onClick={() => {
            fetch(apiurl + id, { method: "DELETE" })
              .then((response) => response.json())
              .then((data) => {
                {
                  navigate("/finance");
                }
              });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FinanceDetail;
