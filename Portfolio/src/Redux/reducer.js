const initialState = {
  scrolled: false,
  scrolledHome: false,
  language: "en",
  locale: "en-US",
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SCROLLED_ABOUT":
      return { ...state, scrolled: action.payload };
    case "SCROLLED_HOME":
      return { ...state, scrolledHome: action.payload };
    case "CHANGE_LANGUAGE":
      return { ...state, language: action.payload };
    case "CHANGE_LOCALE":
      return { ...state, locale: action.payload };
    default:
      return state;
  }
}
export default rootReducer;
