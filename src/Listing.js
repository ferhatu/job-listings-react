import React from "react";

const Listing = (props) => {
  return (
    <div className="logo">
      <img src={props.job.logo} alt="logo" />
    </div>
  );
};
export default Listing;
