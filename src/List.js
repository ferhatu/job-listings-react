import React from "react";
import Listing from "./Listing";
import data from "./data.json";
const List = () => {
  return (
    <div>
      {data.map((job) => {
        return (
          <div key={job.id}>
            <Listing job={job} />
          </div>
        );
      })}
    </div>
  );
};

export default List;
