const config = {
  BASE_URL: "http://127.0.0.1:8080", //"http://51.250.122.210",
  texts: {
    ru: {
      name: "Андрей",
      surname: "Токарев",
      profession: "golang-разработчик",
      location: "город Москва",
    },
    en: {
      name: "Andrei",
      surname: "Tokarev",
      profession: "golang developer",
      location: "from Moscow",
    },
  },
  menuItems: [
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
  ],
  buttonText: {
    en: "Up",
    ru: "Вверх",
  },
};

export default config;
