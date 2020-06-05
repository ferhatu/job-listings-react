import React from "react";

const Listing = (props) => {
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
            {props.job.new && <div className="new">NEW</div>}
            {props.job.featured && <div className="featured">FEATURED</div>}
          </div>
          <div className="listing-secondRow">
            <div className="position">
              <span>{props.job.position}</span>
            </div>
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
        <div className="role-level-language">
          <div>
            <span className="role">{props.job.role}</span>
          </div>
          <div>
            <span className="level">{props.job.level}</span>
          </div>
          <div>
            {props.job.languages.map((language, index) => {
              return (
                <span
                  key={index}
                  onClick={(e) => props.addLanguage(language)}
                  className="language"
                >
                  {language}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Listing;
