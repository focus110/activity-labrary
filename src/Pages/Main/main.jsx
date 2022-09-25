import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Desc from "../../component/Desc";
import Footer from "../../component/Footer";
import Title from "../../component/Title";
import { department } from "../../constants/constants";

const Main = () => {
  const [selected, setSelected] = useState("");

  const goto = useNavigate("");

  const onChange = (e) => setSelected(e.target.value);
  console.log(selected);
  const onSubmit = (e) => {
    e.preventDefault();
    goto("/course");
  };

  const allDept = department.map((item) => {
    return (
      <option key={item.id} value={item.dept}>
        {item.dept}
      </option>
    );
  });

  return (
    <div className="flex justify-between container py-16">
      <div className="text-center mx-auto">
        <Title title="Department" />
        <Desc desc="  Select your department to view your course assignment" />

        <form className="py-16 space-y-8" onSubmit={onSubmit}>
          <div className="w-3/4 flex flex-col mx-auto text-left font-light text-theme-25 py-3 px-2 border-b border-theme-100">
            <select onChange={onChange} className="focus:outline-none">
              <option defaultValue value="" disabled>
                Choose department
              </option>
              {allDept}
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

export default Main;
