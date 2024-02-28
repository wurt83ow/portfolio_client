// App.js
import React, { useState, useEffect } from "react";
import "./app.scss";
import Header from "../header/header.js";
import Section from "../section/section.js";

function App() {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const menuItems = [
    { title: "Home", link: "#", isActive: true },
    { title: "About me", link: "#aboutme", isActive: false },
    { title: "Skills", link: "#skills", isActive: true },
    { title: "Portfolio", link: "#portfolio", isActive: false },
    { title: "Contacts", link: "#contacts", isActive: false },
  ];

  useEffect(() => {
    fetch("http://localhost:8090/api/sections")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        return response.json();
      })
      .then((dataFromServer) => {
        console.log("7777777777777777777777777777777777777777", dataFromServer);
        setSections(dataFromServer);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка1: {error}</div>;
  }

  return (
    <div className="App">
      <Header menuItems={menuItems} />
      <div className="sections">
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            nclass={section.nclass}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
