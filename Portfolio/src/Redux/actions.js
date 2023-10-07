export const scrolledAboutGlobal = (scroll) => {
  return {
    type: "SCROLLED_ABOUT",
    payload: scroll,
  };
};
export const scrolledHomeGlobal = (scroll) => {
  return { type: "SCROLLED_HOME", payload: scroll };
};

export const changeLanguage = (language) => {
  return {
    type: "CHANGE_LANGUAGE",
    payload: language,
  };
};
export const changeLocale = (locale) => {
  return {
    type: "CHANGE_LOCALE",
    payload: locale,
  };
};
