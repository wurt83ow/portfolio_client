import React, { useState, useEffect, useContext } from "react";
import "./ScrollToTop.scss"; // Убедитесь, что у вас есть соответствующий CSS файл
import LanguageContext from "../../contexts/LanguageContext.js"; // Импортируем контекст
import config from "../../config";

const ScrollToTop = () => {
  const { language } = useContext(LanguageContext); // Используем контекст для получения текущего языка
  const [isVisible, setIsVisible] = useState(false);

  // Функция для прокрутки страницы вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Функция для отслеживания прокрутки страницы
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Добавляем обработчик события прокрутки при монтировании компонента
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Удаляем обработчик события при размонтировании компонента
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Тексты кнопки в зависимости от языка
  //const buttonText = language === "en" ? "Up" : "Вверх";
  const buttonText =
    language === "en" ? config.buttonText.en : config.buttonText.ru;

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-to-top-button">
          {buttonText}
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
