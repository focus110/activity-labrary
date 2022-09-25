import React from "react";
import { Link } from "react-router-dom";
import ActivitiesItem from "../../component/ActivitiesItem";
import Title from "../../component/Title";

const Activities = () => {
  return (
    <div className="container flex justify-center py-16">
      <div className="sm:w-2/4 text-center text-theme-25 font-light text-xs sm:text-sm">
        <Title title="Activities" />
        <p>
          Course Code: <span>Com 111</span>
        </p>
        <p>
          Course Title: <span>File management</span>
        </p>

        <ActivitiesItem />
      </div>
    </div>
  );
};

export default Activities;
