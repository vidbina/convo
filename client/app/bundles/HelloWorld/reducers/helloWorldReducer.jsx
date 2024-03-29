import { combineReducers } from 'redux';
import { HELLO_WORLD_NAME_UPDATE, HELLO_WORLD_PASSWORD_UPDATE } from '../constants/helloWorldConstants';
import { SHOW_LOGIN_PROMPT, HIDE_LOGIN_PROMPT } from '../constants/helloWorldConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const loginDialogVisibility = (state = false, action) => {
  switch (action.type) {
    case SHOW_LOGIN_PROMPT:
      return true;
    case HIDE_LOGIN_PROMPT:
      return false;
    default:
      return state;
  }
}

const helloWorldReducer = combineReducers({
  name,
  loginDialogVisibility
});

export default helloWorldReducer;
