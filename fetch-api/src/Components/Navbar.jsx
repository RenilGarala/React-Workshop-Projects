import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="m-5 p-5 bg-slate-700 rounded-lg gap-5 flex flex-wrap ">
      <div className="text-white text-xl bg-slate-500 py-2 px-3 rounded-xl font-mono ">
        <Link to="/">CarData</Link>
      </div>
      <div className="text-white text-xl bg-slate-500 py-2 px-3 rounded-xl font-mono">
        <Link to="/finance">Finance</Link>
      </div>
      <div className="text-white text-xl bg-slate-500 py-2 px-3 rounded-xl font-mono">
        <Link to="/electric">Electric</Link>
      </div>
      <div className="text-white text-xl bg-slate-500 py-2 px-3 rounded-xl font-mono">
        <Link to="/zomato">Zomato-Country</Link>
      </div>
      <div className="text-white text-xl bg-slate-500 py-2 px-3 rounded-xl font-mono">
        <Link to="/user">User</Link>
      </div>
    </div>
  );
};

export default Navbar;
