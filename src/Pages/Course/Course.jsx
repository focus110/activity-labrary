import React from "react";
import { useNavigate } from "react-router-dom";
import Desc from "../../component/Desc";
import Footer from "../../component/Footer";
import Title from "../../component/Title";
import { department } from "../../constants/constants";

const Course = ({ dept }) => {
  const goto = useNavigate("");

  const onSubmit = (e) => {
    e.preventDefault();
    goto("/activities");
  };

  const depCourse = department.map((item) => {
    return dept === item.dept
      ? item.course.map((item, i) => {
          return (
            <option key={i} value={item.title}>
              {item.title}
            </option>
          );
        })
      : null;
  });
  return (
    <div className="flex justify-between container py-16">
      <div className="text-center mx-auto">
        <Title title="Course" />
        <Desc desc="Select course to view assignment" />

        <form className="py-16 space-y-8" onSubmit={onSubmit}>
          <div className="w-3/4 flex flex-col mx-auto text-left font-light text-theme-25 py-3 px-2 border-b border-theme-100">
            <select className="focus:outline-none">
              <option defaultValue value="" disabled>
                Choose course
              </option>
              {depCourse}
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
