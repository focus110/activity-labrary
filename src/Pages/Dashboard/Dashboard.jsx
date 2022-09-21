import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../component/Title";

const Dashboard = () => {
  const [data, setData] = useState({
    msg: "",
    course_code: "",
    course_title: "",
    due_date: "",
    activity: "",
  });

  const { msg, course_code, course_title, due_date, activity } = data;

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      msg === "" ||
      course_code === "" ||
      course_title === "" ||
      due_date === "" ||
      activity === ""
    ) {
      window.alert("Compelete all fields!");
    }
  };

  return (
    <div className="wraper text-center">
      <Title title="Add Assignment" />
      <form
        onSubmit={onSubmit}
        className="space-y-8 sm:space-y-4 pt-16 text-left"
      >
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
          <div className="w-full space-y-2">
            <label htmlFor="course_code">Course Code*</label>
            <input
              value={course_code}
              onChange={onChange}
              name="course_code"
              className="w-full text-sm border border-theme-100 focus:outline-none p-4 rounded-lg"
              type="text"
              placeholder="Enter course code"
            />
          </div>
          <div className="w-full space-y-2 mt-4 sm:mt-0">
            <label htmlFor="course_title">Course Title*</label>
            <input
              value={course_title}
              onChange={onChange}
              name="course_title"
              className="w-full text-sm border border-theme-100 focus:outline-none p-4 rounded-lg"
              type="text"
              placeholder="Enter course title"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
          <div className="w-full space-y-2">
            <label htmlFor="due_date">Due Date*</label>
            <input
              value={due_date}
              onChange={onChange}
              name="due_date"
              className="w-full text-sm border border-theme-100 focus:outline-none p-4 rounded-lg"
              type="date"
              placeholder="Enter course title"
            />
          </div>
          <div className="w-full space-y-2 mt-4 sm:mt-0">
            <label htmlFor="activity">Activity*</label>
            <select
              value={activity}
              onChange={onChange}
              name="activity"
              className="w-full text-sm border border-theme-100 focus:outline-none p-4 rounded-lg"
            >
              <option value="assignment">Assignment</option>
              <option value="upcoming test">Upcoming Test</option>
              {/* <option value="exam">Exam</option> */}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="msg">Assignment*</label>
          <textarea
            value={msg}
            onChange={onChange}
            name="msg"
            className="w-full h-64 text-sm border border-theme-100 focus:outline-none p-4 rounded-lg"
            type="text"
            placeholder="Enter assignment"
          />
        </div>
        <button className="bg-theme-50 text-white rounded-lg py-4 px-8">
          Submit
        </button>
      </form>
    </div>

    // <div className="flex items-center justify-between">
    //   <div className="flex flex-col bg-red-300 w-[20%] h-[85vh] px-8 py-16 space-y-12 border-r border-theme-100 font-medium">
    //     <Link to="#!">Dashboard</Link>
    //     <Link to="#!">Upload</Link>
    //     <Link to="#!">Profile</Link>
    //     <Link to="#!">LogOut</Link>
    //   </div>
    //   <div className="bg-gray-100 w-[55%] h-[85vh]">row2</div>
    //   <div className="bg-slate-800 w-[25%] h-[85vh]">row3</div>
    // </div>
  );
};

export default Dashboard;
