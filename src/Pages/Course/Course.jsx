import React from "react";
import { useNavigate } from "react-router-dom";
import Desc from "../../component/Desc";
import Footer from "../../component/Footer";
import Title from "../../component/Title";

const Course = () => {
  const goto = useNavigate("");

  const onSubmit = (e) => {
    e.preventDefault();
    goto("/activities");
  };
  return (
    <div className="flex justify-between container py-16">
      <div className="text-center mx-auto">
        <Title title="Course" />
        <Desc desc="Select course to view assignment" />

        <form className="py-16 space-y-8" onSubmit={onSubmit}>
          <div className="w-3/4 flex flex-col mx-auto text-left font-light text-theme-25 py-3 px-2 border-b border-theme-100">
            <select className="focus:outline-none">
              <option value={`computer`}>Java OOP</option>
              <option value={`business`}>File management</option>
            </select>
          </div>
          <button className="bg-theme-50 text-white rounded-lg py-4 px-8">
            Submit
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Course;
