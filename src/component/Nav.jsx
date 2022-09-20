import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Image/logo.svg";

const Nav = () => {
  return (
    <div className="flex justify-between container py-8 border-b">
      <Link to="/" className="flex items-end">
        <img className="w-8 mr-4" src={logo} alt="logo" />
        <h2 className="text-xl font-semibold">Activity Lab</h2>
      </Link>
      <Link to="/">Add assignment</Link>
    </div>
  );
};

export default Nav;
