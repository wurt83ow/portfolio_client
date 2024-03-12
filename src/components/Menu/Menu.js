import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";
import "./Menu.scss";

function Menu({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
    console.log("Button clicked:", items[index].title);
  };

  return (
    <nav>
      <div className="container">
        <ul className="menu">
          {items.map(
            (item, index) =>
              console.log("777777777777777777", item.link) || (
                <li key={index} className="menu_item">
                  {/* Используйте ScrollLink для скроллинга к разделам */}
                  <ScrollLink
                    to={item.link.substring(1)}
                    smooth={true}
                    duration={500}
                    className={`menu_link ${
                      index === activeIndex ? "active" : ""
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    {item.title}
                  </ScrollLink>
                </li>
              )
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
