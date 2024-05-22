import React, { useContext, useState } from "react";
import "./Header.scss";
import Menu from "../Menu/Menu.js";
import ModalMenu from "../ModalMenu/ModalMenu.js";
import LangSwitch from "../LangSwitch/LangSwitch.js";
import LanguageContext from "../../contexts/LanguageContext.js"; // Импортируем контекст
import config from "../../config";

const texts = config.texts;
const menuItems = config.menuItems;

function Header() {
  const { language } = useContext(LanguageContext); // Используем контекст
  const [isModalOpen, setIsModalOpen] = useState(false);

  // // Пример текстов для разных языков
  // const texts = {
  //   ru: {
  //     name: "Андрей",
  //     surname: "Токарев",
  //     profession: "golang-разработчик",
  //     location: "город Москва",
  //   },
  //   en: {
  //     name: "Andrei",
  //     surname: "Tokarev",
  //     profession: "golang developer",
  //     location: "from Moscow",
  //   },
  // };

  // // Определяем структуру menuItems на уровне Header
  // const menuItems = [
  //   { title: { en: "Home", ru: "Домой" }, link: "#", isActive: true },
  //   {
  //     title: { en: "About me", ru: "Обо мне" },
  //     link: "#section-aboutme",
  //     isActive: false,
  //   },
  //   {
  //     title: { en: "Skills", ru: "Навыки" },
  //     link: "#section-skills",
  //     isActive: true,
  //   },
  //   {
  //     title: { en: "Portfolio", ru: "Портфолио" },
  //     link: "#section-portfolio",
  //     isActive: false,
  //   },
  //   {
  //     title: { en: "Contacts", ru: "Контакты" },
  //     link: "#section-contacts",
  //     isActive: false,
  //   },
  // ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
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
                <ModalMenu
                  triggerText=""
                  items={menuItems}
                  language={language}
                />
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
          {isModalOpen && (
            <div className="modal" onClick={toggleModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Содержимое модального окна */}
                <button onClick={toggleModal}>Закрыть</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
