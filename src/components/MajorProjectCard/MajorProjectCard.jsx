import React from "react";
import "./MajorProjectCard.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import tempimg from "../../assets/tempimage.png";

const MajorProjectCard = ({ classNa, item }) => {
  return (
    <div className={`majorprojectcard ${classNa}`}>
      <div className="contents">
        <p>Featured Project</p>
        <h2 className="gradient__text">{item.name}</h2>
        <div className="info">
          <p>{item.projDescription}</p>
        </div>
        <div className="techstack">
          {item.techstackUsed.map((inneritem) => (
            <span key={inneritem}>{inneritem}</span>
          ))}
        </div>
        <div className="links">
          {item.githubLink && (
            <a
              href={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              aria-label={`${item.name} source code`}
            >
              <AiOutlineGithub />
            </a>
          )}
          {item.hostedLink && (
            <a
              href={item.hostedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
              aria-label={`View ${item.name} live project`}
            >
              <BiLinkExternal />
            </a>
          )}
        </div>
      </div>
      <div className="image">
        <img src={item.imageLink || tempimg} alt={`${item.name} preview`} />
      </div>
    </div>
  );
};

export default MajorProjectCard;
