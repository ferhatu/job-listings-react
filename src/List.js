import React from "react";
import Listing from "./Listing";
import data from "./src/data";
const List = () => {
    return(
        {data.map((job) => {
            return (
                <div>
                    <Listing job={job[0]} />
                </div>
            )
        })
    }
    )};
  
export default List;
