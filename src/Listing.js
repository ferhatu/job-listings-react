import React from "react";

const Listing = (props) => {
  // const [age, setAge] = useState(false);
  // const chooseAge = ()=>{
  //   return setAge(age) ?
  // }

  return (
    <div className="listing-container">
      <div className="listing-inner-container">
        <div className="logo">
          <img src={props.job.logo} alt="logo" />
        </div>
        <div className="allRows">
          <div className="listing-firstRow">
            <div>
              <span className="company">{props.job.company}</span>
            </div>
            <div>
              <span>{props.job.new}</span>
            </div>
            <div>
              <span>{props.job.featured}</span>
            </div>
          </div>
          <div className="listing-secondRow">
            <span className="position">{props.job.position}</span>
          </div>
          <div className="listing-thirdRow">
            <div>
              <span className="day">{props.job.postedAt}</span>
            </div>
            <div>
              <span className="fullTime">{props.job.contract}</span>
            </div>
            <div>
              <span className="country">{props.job.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Listing;
