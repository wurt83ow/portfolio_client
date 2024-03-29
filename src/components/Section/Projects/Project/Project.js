import React, { useContext } from "react";
import "./Project.scss";
import LanguageContext from "../../../../contexts/LanguageContext.js"; // Импортируем контекст

const Project = ({ project }) => {
  const { language } = useContext(LanguageContext); // Используем контекст

  return (
    <div className="project">
      <h3>{project.title[language]}</h3>{" "}
      {/* Используем текущий язык для title */}
      <p>{project.descr[language]}</p> {/* Используем текущий язык для descr */}
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
