const initialState = {
  scrolled: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SCROLLED_ABOUT":
      return { ...state, scrolled: action.payload };

    default:
      return state;
  }
}
export default rootReducer;
