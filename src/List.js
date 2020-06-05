import React from "react";
import Listing from "./Listing";

const List = (props) => {
  return (
    <div>
      {props.data.map((job, index) => {
        return (
          <div key={index}>
            <Listing addLanguage={props.addLanguage} job={job} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
