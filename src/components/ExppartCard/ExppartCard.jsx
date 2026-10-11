import React from "react";
import "./ExppartCard.scss";

const ExppartCard = ({ item }) => {
  return (
    <div className="exxpCard">
      <div className="img">
        {item.companyLogo ? (
          <img src={item.companyLogo} alt={`${item.heading} logo`} />
        ) : (
          <span className="company-mark" aria-label={`${item.heading} initials`}>
            {item.logoText || item.heading.slice(0, 2)}
          </span>
        )}
      </div>
      <div className="contents">
        <h2>{item.heading}</h2>
        <h3>{item.type}</h3>
        {item.lowHeading?.length > 0 && (
          <ul className="highlights">
            {item.lowHeading.map((highlight, index) => (
              <li key={`${item.heading}-highlight-${index}`}>{highlight.content}</li>
            ))}
          </ul>
        )}
        {item.techstack?.length > 0 && (
          <div className="tech-stack" aria-label="Technologies used">
            {item.techstack.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default ExppartCard;
