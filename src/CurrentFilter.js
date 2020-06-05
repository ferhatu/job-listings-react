import React from "react";

const CurrentFilter = (props) => {
  return (
    <div className="current-filter">
      {props.jobFilter.map((data, index) => (
        <span key={index}>{data}</span>
      ))}
    </div>
  );
};
export default CurrentFilter;
