import React from "react";

const Title = ({ title }) => {
  return (
    <h2 className="text-xl sm:text-4xl mb-4 text-theme-50 font-medium">
      {title}
    </h2>
  );
};

export default Title;
