import React from "react";

const CalButton = (props) => {
    
  return (
    <div className="p-1">
      {props.value == "=" ? (
        <button  className="bg-slate-700 text-white p-4 w-full h-16 rounded-full text-xl hover:bg-slate-600">
          {props.value}
        </button>
      ) : (
        <button  className="bg-slate-700 text-white p-4 w-16 h-16 rounded-full text-xl hover:bg-slate-600">
          {props.value}
        </button>
      )}
    </div>
  );
};

export default CalButton;
