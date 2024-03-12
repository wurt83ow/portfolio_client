import React, { useContext } from "react";
import "./Header.scss";
import Menu from "../Menu/Menu.js";
import LangSwitch from "../LangSwitch/LangSwitch.js";
import LanguageContext from "../../contexts/LanguageContext.js"; // Импортируем контекст

function Header() {
  const { language } = useContext(LanguageContext); // Используем контекст

  // Пример текстов для разных языков
  const texts = {
    ru: {
      name: "Андрей",
      surname: "Токарев",
      profession: "разработчик на Go",
      location: "из Москвы",
    },
    en: {
      name: "Andrei",
      surname: "Tokarev",
      profession: "golang developer",
      location: "from Moscow",
    },
  };

  // Определяем структуру menuItems на уровне Header
  const menuItems = [
    { title: { en: "Home", ru: "Домой" }, link: "#", isActive: true },
    {
      title: { en: "About me", ru: "Обо мне" },
      link: "#section-aboutme",
      isActive: false,
    },
    {
      title: { en: "Skills", ru: "Навыки" },
      link: "#section-skills",
      isActive: true,
    },
    {
      title: { en: "Portfolio", ru: "Портфолио" },
      link: "#section-portfolio",
      isActive: false,
    },
    {
      title: { en: "Contacts", ru: "Контакты" },
      link: "#section-contacts",
      isActive: false,
    },
  ];

  return (
    <div className="header">
      <Menu
        items={menuItems.map((item) => ({
          ...item,
          title: item.title[language],
        }))}
      />
      <div className="subheader">
        <div className="container">
          {/* Разметка для остальной части шапки */}
          <div className="row">
            <div className="col">
              <div className="menu_btn">
                <button data-modal-menu>
                  <img src="icons/menu.png" alt="menu" />
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="target_name">
                <p>{texts[language].name}</p>
                <p>{texts[language].surname}</p>
              </div>
            </div>
            <div className="col-md-3 offset-md-1">
              <div className="target_info">
                <p>{texts[language].profession}</p>
                <p>{texts[language].location}</p>
              </div>
            </div>
            <div className="col-md-4 lang_box">{<LangSwitch />}</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="target_photo">
                {/* <img src="media/targetPhoto.png" alt="photo" /> */}
              </div>
            </div>
          </div>
          {/* Здесь можно добавить любые другие элементы шапки */}
        </div>
      </div>
    </div>
  );
}

export default Header;
