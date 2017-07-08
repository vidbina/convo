import PropTypes from 'prop-types';
import React from 'react';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { LoginForm, LoginFormDialog } from './LoginForm';
import { DebugDrawer } from './Drawer';

const HelloWorld = ({
  name,
  isVisibleDebugDrawer,
  isVisibleLoginPrompt,
  showDebugDrawer, hideDebugDrawer,
  showLoginPrompt, hideLoginPrompt,
  updateName, updatePassword,
}) => (
  <div>
    <AppBar
      title={"Title"}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonTouchTap={showDebugDrawer}
    />

    <DebugDrawer
      isVisible={isVisibleDebugDrawer}
      actions={[{key: "showLogin", caption: "Login", func: showLoginPrompt}]}
      onHide={hideDebugDrawer}
    />

    <FlatButton
      label="State"
      primary={true}
      onTouchTap={() => console.log({isVisibleLoginPrompt, isVisibleDebugDrawer})}
    />

    <LoginFormDialog
      handle={name}
      isVisible={isVisibleLoginPrompt}
      onAttempt={() => console.log("LOGIN")}
      onChangeHandle={updateName}
      onChangeSecret={updatePassword}
      onHide={hideLoginPrompt}
    />
  </div>
);

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
  hideLoginPrompt: PropTypes.func.isRequired,
  showLoginPrompt: PropTypes.func.isRequired,
  hideDebugDrawer: PropTypes.func.isRequired,
  showDebugDrawer: PropTypes.func.isRequired,
  //debug: PropTypes.bool.isRequired<
};

export default HelloWorld;
