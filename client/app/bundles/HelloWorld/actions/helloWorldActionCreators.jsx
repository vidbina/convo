/* eslint-disable import/prefer-default-export */

import { HELLO_WORLD_NAME_UPDATE, HELLO_WORLD_PASSWORD_UPDATE } from '../constants/helloWorldConstants';
import {
  SHOW_DEBUG_DRAWER, HIDE_DEBUG_DRAWER,
  SHOW_LOGIN_PROMPT, HIDE_LOGIN_PROMPT,
} from '../constants/helloWorldConstants';

export const updateName = (text) => ({
  type: HELLO_WORLD_NAME_UPDATE,
  text,
});

export const updatePassword = (text) => ({
  type: HELLO_WORLD_PASSWORD_UPDATE,
  text,
});

export const showLoginPrompt = () => ({
  type: SHOW_LOGIN_PROMPT,
});

export const hideLoginPrompt = () => ({
  type: HIDE_LOGIN_PROMPT,
});

export const showDebugDrawer = () => ({
  type: SHOW_DEBUG_DRAWER,
});

export const hideDebugDrawer = () => ({
  type: HIDE_DEBUG_DRAWER,
});
