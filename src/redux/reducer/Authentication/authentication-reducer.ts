import { ReducerToggle } from "../Reducers.enum";

const authenticationReducer = (state = null, action: any) => {
  switch (action.type) {
    case ReducerToggle.Authentication:
      return action.payload;
    default:
      return state;
  }
};

export default authenticationReducer;