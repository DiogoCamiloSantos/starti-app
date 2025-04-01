import DefaultTheme from "../../../common/theme/default-theme";
import { ReducerToggle } from "../Reducers.enum";

const themeReducer = (state = DefaultTheme, action: any) => {
  switch (action.type) {
    case ReducerToggle.Theme:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;