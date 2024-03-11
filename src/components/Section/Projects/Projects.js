import React from "react";
import Project from "../Project/Project";
import "./Projects.scss";

const Projects = ({ content }) => {
  return (
    <div className="projects">
      <h2>{content.title}</h2>
      {content.items.map((item) => (
        <Project key={item.id} project={item} />
      ))}
    </div>
  );
};

export default Projects;
