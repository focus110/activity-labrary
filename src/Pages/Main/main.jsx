import React from "react";

const main = () => {
  const onSubmit = () => {};
  return (
    <div className="flex justify-between container py-16">
      <div className="text-center mx-auto">
        <h2 className="text-4xl mb-4">Department</h2>
        <p className="text-lg text-theme-25">
          Select your department to view your course <br />
          assignment
        </p>

        <form className="py-16" onSubmit={onSubmit}>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default main;
