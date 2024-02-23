// App.js
import React, { useState, useEffect } from "react";
import "./app.scss";
import Header from "../header/header.js";
import Section from "../section/section.js";

import html5Icon from "../icons/technology/html5.png";
import css3Icon from "../icons/technology/css3.png";
import javascriptIcon from "../icons/technology/javascript.png";
import reactIcon from "../icons/technology/react.png";

import levis from "../media/levis.png";
import reebok from "../media/reebok.png";
import braun from "../media/braun.png";

import behance from "../icons/contacts/behance.png";
import dribbble from "../icons/contacts/dribbble.png";
import instagram from "../icons/contacts/instagram.png";
import linkedIn from "../icons/contacts/linkedIn.png";

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
          textBefore: `Привет! Меня зовут Андрей, и я - разработчик на Golang. Я начинал свою карьеру как разработчик 1С, и этот опыт дал мне глубокое понимание бизнес-процессов и потребностей пользователей.
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
          textBefore: "I work in such technologies as",
          cards: [
            { src: html5Icon, alt: "HTML5", rating: 1 },
            { src: css3Icon, alt: "CSS3", rating: 2 },
            { src: javascriptIcon, alt: "JavaScript", rating: 3 },
            { src: reactIcon, alt: "React", rating: 4 },
          ],
          isActive: true,
        },
      },
      {
        id: 3,
        nclass: "portfolio",
        title: "Портфолио",
        content: {
          textBefore: "",
          bigCards: [
            {
              src: levis,
              alt: "levis",
              href: "#",
              hrefText: "Online fashion store - Homepage",
            },
            {
              src: reebok,
              alt: "reebok",
              href: "#",
              hrefText: "Reebok Store - Concept",
            },
            {
              src: braun,
              alt: "braun",
              href: "#",
              hrefText: "Braun Landing Page - Concept",
            },
          ],
          isActive: true,
        },
      },
      {
        id: 4,
        nclass: "contacts",
        title: "Contacts",
        content: {
          textBefore: "Want to know more or just chat?\nYou are welcome!",
          btnText: "Send message",
          socialIcons: [
            { src: linkedIn, alt: "linkedIn", href: "#" },
            {
              src: instagram,
              alt: "instagram",
              href: "#",
            },
            { src: behance, alt: "behance", href: "#" },
            { src: dribbble, alt: "dribbble", href: "#" },
          ],
          textAfter: "Like me on\nLinkedIn, Instagram, Behance, Dribble",
          isActive: true,
        },
      },
    ];

    setSections(dataFromServer);
  }, []);

  return (
    <div className="App">
      <Header menuItems={menuItems} />

      {/* Добавляем динамические секции */}
      <div className="sections">
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
    </div>
  );
}

export default App;
