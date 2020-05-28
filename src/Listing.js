import React from "react";

const Listing = (props) => {
  return (
      {props.job.map((data)=>{
return(
          <div>

              <span>{data.company}</span>


          </div>
);

      })}
  
  );
};
export default Listing;
