import React, { useState } from "react";
import "./menu.scss";

function Menu({ items }) {
  // Создаем состояние для хранения активной кнопки
  const [activeIndex, setActiveIndex] = useState(null);

  // Функция-обработчик клика по кнопке
  const handleClick = (index) => {
    // Устанавливаем индекс активной кнопки
    setActiveIndex(index);
    // Ваша логика обработки клика, например, изменение состояния isActive
    console.log("Button clicked:", items[index].title);
  };

  return (
    <nav>
      <div className="container">
        <ul className="menu">
          {items.map((item, index) => (
            <li key={index} className="menu_item">
              <a
                href={item.link}
                className={`menu_link ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleClick(index)} // Добавляем обработчик клика
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
