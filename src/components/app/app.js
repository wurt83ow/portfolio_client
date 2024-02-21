// App.js
import React, { useState, useEffect } from "react";

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
    { title: "About me", link: "#aboutme", isActive: false },
    { title: "Skills", link: "#skills", isActive: true },
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
        nclass: "aboutme",
        title: "Обо мне",
        content: {
          text: `Привет! Меня зовут Андрей, и я - разработчик на Golang. Я начинал свою карьеру как разработчик 1С, и этот опыт дал мне глубокое понимание бизнес-процессов и потребностей пользователей.
            С тех пор я успешно перешел на Golang и с нетерпением исследую новые возможности, которые этот язык предлагает. Хотя создание высокопроизводительных веб-приложений и микросервисов - это новая область для меня, я уверен, что мой предыдущий опыт и навыки помогут мне в этом.
          
          На моем сайте вы найдете информацию обо мне, моем опыте работы, навыках и проектах, над которыми я работал. Если у вас есть вопросы или предложения, не стесняйтесь связаться со мной!
          
          Спасибо за посещение моего сайта. Надеюсь, вам понравится!`,
        },
        isActive: false,
      },
      {
        id: 2,
        nclass: "skills",
        title: "Опыт",
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
      <div className="header">
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
                  <p>golang developer</p>
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
        </div>isActive
      </div>

      {/* Добавляем динамические секции */}

      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          nclass={section.nclass}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
}

export default App;
