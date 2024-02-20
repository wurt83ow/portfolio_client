// App.js
import React, { useState, useEffect } from "react";
import "./app.css";

import Menu from "../menu/menu.js";
import Section from "../section/section.js";
import html5Icon from "../icons/technology/html5.png";
import css3Icon from "../icons/technology/css3.png";
import javascriptIcon from "../icons/technology/javascript.png";
import reactIcon from "../icons/technology/react.png";

function App() {
  const [sections, setSections] = useState([]);
  const menuItems = [
    { title: "Home", link: "#", isActive: true },
    { title: "About me", link: "#about", isActive: false },
    { title: "Skills", link: "#skills", isActive: false },
    { title: "Portfolio", link: "#portfolio", isActive: false },
    { title: "Contacts", link: "#contacts", isActive: false },
  ];

  useEffect(() => {
    // Здесь можно отправить запрос на сервер для получения данных
    // Например, fetch('/api/sections') или использовать библиотеку axios
    // После получения данных, установите их в состояние
    const dataFromServer = [
      {
        id: 1,
        title: "About me",
        content: {
          text: "Hi, I'm Andrei – web developer from Moscow. I'm interested in development and everything connected with it. Ready to implement excellent projects with wonderful people.",
          images: [{ src: "../media/haykPhoto.png", alt: "Andrei" }],
        },
        isActive: false,
      },
      {
        id: 2,
        title: "Skills",
        content: {
          text: "I work in such technologies as",
          images: [
            { src: html5Icon, alt: "HTML5" },
            { src: css3Icon, alt: "CSS3" },
            { src: javascriptIcon, alt: "JavaScript" },
            { src: reactIcon, alt: "React" },
          ],
          isActive: true,
        },
      },
      // Другие секции
    ];

    setSections(dataFromServer);
  }, []);

  return (
    <div className="App">
      <header>
        <Menu items={menuItems} />
        <div className="subheader">
          <div className="container">
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
                  <p>Andrei</p>
                  <p>Tokarev</p>
                </div>
              </div>
              <div className="col-md-3 offset-md-1">
                <div className="target_info">
                  <p>Go developer</p>
                  <p>from Moscow</p>
                </div>
              </div>
              <div className="col-md-4 lang_box">
                <div className="lang_switch">
                  <div className="form_toggle">
                    <label className="contactChoice item-1">
                      <input
                        id="fid-1"
                        type="radio"
                        name="radio"
                        value="ru"
                        defaultChecked
                      />
                      <div className="langs">ru</div>
                    </label>
                    <label className="contactChoice item-2">
                      <input id="fid-2" type="radio" name="radio" value="eng" />
                      <div className="langs">eng</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="target_photo">
                  {/* <img src="media/targetPhoto.png" alt="photo" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Добавляем динамические секции */}

      {sections.map((section) => (
        <Section
          key={section.id}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
}

export default App;
