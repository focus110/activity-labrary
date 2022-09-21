import React from "react";
import { Link } from "react-router-dom";
import Title from "../../component/Title";

const Activities = () => {
  const acty = [
    {
      Title:
        "Q. 1 A. Explain major component of digital computer with suitable...",
      course_code: "com 111",
      course_title: "File management",
      time: "5 mins ago",
      activity: "assignment",
    },
    {
      Title:
        "Q. 1 A. Explain major component of digital computer with suitable...",
      course_code: "com 111",
      course_title: "File management",
      time: "5 mins ago",
      activity: "assignment",
    },
  ];
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

        <div className="flex flex-col space-y-4 my-8">
          {acty.map((item, i) => {
            return (
              <Link
                to="/activity"
                className="relative overflow-hidden w-full rounded-lg border border-theme-100 py-4 px-4 sm:py-8 sm:px-8 shadow-sm"
              >
                <p className="text-left text-black font-medium sm:text-base">
                  Q. 1 A. Explain major component of digital computer with
                  suitable...
                </p>

                <div className="flex items-center space-x-4 sm:space-x-8">
                  <div className="flex items-center space-x-2 py-4 text-left sm:text-center">
                    <p className="text-[11px]">
                      <span>Assignment</span>
                      <span className="px-1">•</span>
                      <span>1 hours ago</span>
                      {/* <span className="absolute -right-3 -top-3 bg-red-500 w-20 h-20 flex justify-center items-center font-medium text-white rounded-full">
                        submitted
                      </span> */}
                    </p>
                    <span className="hover:shadow-md z-10 p-1 rounded-full">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 sm:space-x-8">
                  <div className="flex items-center space-x-2 py-4 text-left sm:text-center">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                    <p>
                      Due Date: <span>1 october</span>
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 py-4 text-left sm:text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>

                    <p>Esther Washinton</p>
                  </div>
                </div>

                <p className="flex mt-1 space-x-2 text-theme-50 font-medium text-left">
                  {/* <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg> */}
                  <span>View full</span>
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activities;
