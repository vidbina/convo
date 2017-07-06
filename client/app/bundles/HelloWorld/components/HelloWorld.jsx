import PropTypes from 'prop-types';
import React from 'react';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

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

    <Dialog
      title="Login"
      actions={[]}
      modal={false}
      open={isVisibleLoginPrompt}
      onRequestClose={hideLoginPrompt}
    >
      <form>
        <TextField
          id="loginHandle"
          floatingLabelText="Name"
          type="text"
          value={name}
          onChange={(e) => updateName(e.target.value)}
        />
        <TextField
          id="loginPassword"
          floatingLabelText="Password"
          type="password"
          onChange={(e) => updatePassword(e.target.value)}
        />
      </form>
    </Dialog>
  </div>
);

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
  showLoginPrompt: PropTypes.func.isRequired,
};

export default HelloWorld;
