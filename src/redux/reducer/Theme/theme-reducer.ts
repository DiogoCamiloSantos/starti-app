import DefaultTheme from "../../../common/theme/default-theme";

const themeReducer = (state = DefaultTheme, action: any) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;