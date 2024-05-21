// App.js
import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "../Header/Header.js";
import Section from "../Section/Section.js";
import LanguageContext from "../../contexts/LanguageContext.js"; // Импортируем контекст
import ScrollToTop from "../ScrollToTop/ScrollToTop.js"; // Импортируем компонент ScrollToTop
import ErrorMessage from "../ErrorMessage/ErrorMessage.js"; // Импортируем компонент ErrorMessage


function App() {
  const [sections, setSections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("en"); // Состояние для языка

  useEffect(() => {
    fetch(`${BASE_URL}:8080/api/sections`)
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
    return <ErrorMessage error={error} />; // Используем компонент ErrorMessage
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {" "}
      {/* Обертываем в Provider */}
      <div className="App">
        <Header />
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
        <ScrollToTop /> {/* Добавляем компонент ScrollToTop */}
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
