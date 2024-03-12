import React, { useState, useEffect } from "react";
import "./ScrollToTop.scss"; // Убедитесь, что у вас есть соответствующий CSS файл

const ScrollToTop = () => {
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

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-to-top-button">
          Вверх
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
