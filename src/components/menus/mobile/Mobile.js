import React, { useState } from 'react';
import useStyles from './Mobile.styles';
import { SwipeableDrawer } from '@material-ui/core';
import menuIcon from '../../../assets/images/menu.png';
import brandLogo from '../../../assets/images/logo.png';
import CartButton from '../desktop/CartButton';
import MenuItems from './MenuItems';

export default function Mobile() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleOpenMenu = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      <div className={classes.rightMenu} onClick={toggleOpenMenu}>
        <img src={menuIcon} alt="menu icon" className={classes.menuIcon} />
      </div>
      <div className={classes.centerMenu}>
        <img src={brandLogo} alt="menu icon" className={classes.brandLogo} />
      </div>
      <div className={classes.leftMenu}>
        <CartButton />
      </div>
      <SwipeableDrawer
        onOpen={toggleOpenMenu}
        onClose={toggleOpenMenu}
        open={open}
      >
        <MenuItems />
      </SwipeableDrawer>
    </div>
  );
}
