import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import "./ModalMenu.scss";
import LanguageContext from "../../contexts/LanguageContext"; // Импортируем контекст

function ModalMenu({ items, triggerText }) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext); // Используем контекст

  const toggleModal = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "visible" : "hidden";
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <>
      <button
        data-modal-menu="true"
        onClick={toggleModal}
        className={isOpen ? "active" : ""}
      >
        {triggerText}
      </button>
      {isOpen && (
        <div className="modal_menu" onClick={toggleModal}>
          <div className="modal_menu__dialog">
            <div className="modal_menu__content">
              <div
                data-menu-close
                className="modal_menu__close"
                onClick={toggleModal}
              >
                ×
              </div>
              {items.map((item, index) => (
                <div key={index} className="modal_menu__input">
                  <a
                    href={item.link}
                    className={`menu_link ${item.isActive ? "active" : ""}`}
                  >
                    {language === "ru" ? item.title.ru : item.title.en}
                  </a>
                </div>
              ))}
              {/* Простая реализация выбора языка */}
              <div className="simple_lang_switch">
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="ru"
                    checked={language === "ru"}
                    onChange={handleLanguageChange}
                  />
                  Русский
                </label>
                <label>
                  <input
                    type="radio"
                    name="language"
                    value="en"
                    checked={language === "en"}
                    onChange={handleLanguageChange}
                  />
                  English
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

ModalMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.shape({
        ru: PropTypes.string.isRequired,
        en: PropTypes.string.isRequired,
      }).isRequired,
      isActive: PropTypes.bool.isRequired,
    })
  ).isRequired,
  triggerText: PropTypes.string.isRequired,
};

export default ModalMenu;
