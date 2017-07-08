import PropTypes from 'prop-types';
import React from 'react';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { LoginForm, LoginFormDialog } from './LoginForm';

const HelloWorld = ({
  name, isVisibleLoginPrompt,
  updateName, updatePassword,
  showLoginPrompt, hideLoginPrompt,
}) => (
  <div>
    <AppBar
      title={"Title"}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />

    <FlatButton
      label="Login"
      primary={true}
      onTouchTap={showLoginPrompt}
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
  showLoginPrompt: PropTypes.func.isRequired,
};

export default HelloWorld;
