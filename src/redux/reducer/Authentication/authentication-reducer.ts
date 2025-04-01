const authenticationReducer = (state = null, action: any) => {
  switch (action.type) {
    case 'TOGGLE_AUTHENTICATION':
      return action.payload;
    default:
      return state;
  }
};

export default authenticationReducer;