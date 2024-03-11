// App.js
import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "../Header/Header.js";
import Section from "../Section/Section.js";

// const BASE_URL = "http://51.250.122.145"; //!!! Вернуть
const BASE_URL = "http://127.0.0.1";

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
    fetch(`${BASE_URL}:8080/api/sections`) //!!! Убрать :8080
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        return response.json();
      })
      .then((dataFromServer) => {
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
            baseurl={BASE_URL}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
