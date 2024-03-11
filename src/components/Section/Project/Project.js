import React from "react";
import "./Project.scss";

const Project = ({ project }) => {
  return (
    <div className="project">
      <h3>{project.title}</h3>
      <p>{project.descr}</p>
      <div className="links">
        {project.hrefs.map((href, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            {href}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
