import React from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

const LoginForm = ({
  handle, onChangeHandle, onChangeSecret, onAttempt,
}) => (
  <form>
    <TextField
      id="loginHandle"
      floatingLabelText="Handle"
      type="text"
      value={handle}
      onChange={(e) => onChangeHandle(e.target.value)}
    />
    <TextField
      id="loginPassword"
      floatingLabelText="Secret"
      type="password"
      onChange={(e) => onChangeSecret(e.target.value)}
    />
  </form>
);

const LoginFormDialog = ({
  handle, isVisible, onAttempt, onChangeHandle, onChangeSecret, onHide,
}) => (
  <Dialog
    title="Provide login credentials"
    actions={[
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={onHide}
      />,
      <FlatButton
        label="Login"
        primary={true}
        keyboardFocused={true}
        onTouchTap={onHide}
      />,
    ]}
    modal={false}
    open={isVisible}
    onRequestClose={onHide}
  >
    <LoginForm
      handle={handle}
      onChangeHandle={onChangeHandle}
      onChangeSecret={onChangeSecret}
    />
  </Dialog>
);

LoginForm.propTypes = {
  handle: PropTypes.string.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  onChangeSecret: PropTypes.func.isRequired,
}

LoginFormDialog.propTypes = {
  handle: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onAttempt: PropTypes.func.isRequired,
  onChangeHandle: PropTypes.func.isRequired,
  onChangeSecret: PropTypes.func.isRequired,
  onHide: PropTypes.func.isRequired,
}

export { LoginForm, LoginFormDialog }
