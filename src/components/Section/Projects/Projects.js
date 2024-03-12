import React, { useContext } from "react";
import Project from "./Project/Project.js";
import "./Projects.scss";
import LanguageContext from "../../../contexts/LanguageContext.js"; // Импортируем контекст

const Projects = ({ content }) => {
  const { language } = useContext(LanguageContext); // Используем контекст

  // Проверяем, что content.title и content.title[language] определены
  const title =
    content.title && content.title[language] ? content.title[language] : "";

  return (
    <div className="projects">
      <h2>{title}</h2> {/* Используем title, если он определен */}
      {content.items &&
        content.items.map((item) => <Project key={item.id} project={item} />)}
    </div>
  );
};

export default Projects;
