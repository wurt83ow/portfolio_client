import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";
import "./Menu.scss";

function Menu({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav>
      <div className="container">
        <ul className="menu">
          {items.map((item, index) => (
            <li key={index} className="menu_item">
              {/* Используйте ScrollLink для скроллинга к разделам */}
              <ScrollLink
                to={item.link.substring(1)}
                smooth={true}
                duration={500}
                className={`menu_link ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                {item.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menu;
