import React from "react";

const LanguageContext = React.createContext({
  language: "ru",
  setLanguage: () => {},
});

export default LanguageContext;
