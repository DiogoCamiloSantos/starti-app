import { combineReducers, createStore } from 'redux';
import themeReducer from './reducer/Theme/theme-reducer';
import authenticationReducer from './reducer/Authentication/authentication-reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  authentication: authenticationReducer,
});

const store = createStore(rootReducer);

export default store;