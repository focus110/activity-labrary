import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Image/logo.svg";

const Nav = () => {
  const currentSemeter = "2nd Semester";
  return (
    <div className="sticky top-0 bg-white flex justify-between items-end container py-8 border-b z-20">
      <Link to="/" className="flex items-end">
        <img className="w-6 sm:w-8 mr-4" src={logo} alt="logo" />
        <h2 className="text-sm sm:text-xl font-semibold">Activity Lab</h2>
      </Link>
      <span className="text-xs">current semester: {currentSemeter}</span>
      <Link className="text-sm sm:text-base" to="/dashboard">
        Add assignment
      </Link>
    </div>
  );
};

export default Nav;
