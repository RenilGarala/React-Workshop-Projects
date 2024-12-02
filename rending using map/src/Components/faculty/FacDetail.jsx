import React from "react";
import { Link, useParams } from "react-router-dom";
import faculties from "../../../tasks/facaulty";

const FacDetail = () => {
  const { id } = useParams();
  const faculty = faculties[id];
  return (
    <div>
      <div className="relative rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
        <img
          src={faculty.FacultyImage}
          className="text-lg font-semibold text-gray-800"
        />
        <h3 className="text-xl pt-2 font-semibold text-gray-800">
          Name : {faculty.FacultyName}
        </h3>
        <p className="text-base font-semibold text-gray-800 mt-1">
          Date: {faculty.createdAt}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Initial: {faculty.FacultyInitial}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Description: {faculty.FacultyDescription}
        </p>
        <p className="text-sm text-gray-600 mt-1">
          D.O.B: {faculty.FacultyDateOfBirth}
        </p>
        <p className="text-sm text-gray-600 mt-1">ID: {faculty.id}</p>
        <Link
          to="/"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default FacDetail;
