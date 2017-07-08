import React from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const DebugDrawer = ({
  actions,
  isVisible,
  onHide,
}) => (
  <Drawer
    docked={false}
    open={isVisible}
    openSecondary={true}
    width={200}
    onRequestChange={(open, reason) => { if(open==false) { onHide() } }}
  >
    {actions.map(({key, caption, func}) =>
      <MenuItem
        key={key}
        onTouchTap={func}
      >
        {caption}
      </MenuItem>)
    }
  </Drawer>
)

DebugDrawer.propTypes = {
  actions: PropTypes.array.isRequired,
}

export { DebugDrawer };
