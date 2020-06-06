import React from "react";

const CurrentFilter = (props) => {
  return (
    <div className={props.jobFilter.length > 0 ? "current-filter" : null}>
      {props.jobFilter.map((data, index) => (
        <span
          onClick={() => props.removeTag(data)}
          className="current-select"
          key={index}
        >
          {data}
        </span>
      ))}
    </div>
  );
};
export default CurrentFilter;
