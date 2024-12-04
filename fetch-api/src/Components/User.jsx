import React, { useState, useEffect } from "react";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results); 
      });
  }, []);

  return (
    <div className="text-white m-5 font-mono">
      <h1 className="text-center py-5 text-2xl font-extrabold">
        User Details
      </h1>
      <div className="flex flex-wrap  justify-center gap-4">
        {users.map((user, id) => (
          <div
            key={user.login.uuid} 
            className="p-3 w-80 bg-gray-800 rounded-lg text-left"
          >
            <div>
              <img
                className="mx-auto mb-3 rounded-full"
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
              />
            </div>
            <div className="font-semibold">
              <span className="text-red-400">Name:</span> {user.name.title}{" "}
              {user.name.first} {user.name.last}
            </div>
            <div>
              <span className="text-red-400">Gender:</span> {user.gender}
            </div>
            <div>
              <span className="text-red-400">Email:</span> {user.email}
            </div>
            <div>
              <span className="text-red-400">Phone:</span> {user.phone}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
