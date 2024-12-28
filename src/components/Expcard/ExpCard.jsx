import React from "react";
import data from "../../data";
import "./ExpCard.scss";

const ExpCard = () => {
  return (<>
  <div className="expCard">
      <div className="img">
        <img src={data.instituteLogo} alt="" />
      </div>
      <div className="contents">
        <h2>{data.instituteName}</h2>
        <h3>{data.branch}</h3>
        <p>
          {data.started} - {data.end}
        </p>
      </div>
      <div></div>
    </div>
    
    <div className="expCard">
      <div className="img">
        <img src={data.schoolLogo} alt="" />
      </div>
      <div className="contents">
        <h2>{data.schoolName}</h2>
        <h3>{data.stream}</h3>
        <p>
          {data.schoolStarted} - {data.schoolEnd}
        </p>
      </div>
      <div></div>
    </div></>
    
  );
};

export default ExpCard;
