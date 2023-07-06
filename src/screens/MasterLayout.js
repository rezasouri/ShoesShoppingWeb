import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Hidden } from '@material-ui/core';
import useStyles from './MasterLayout.styles';
import MobileMenu from '../components/menus/mobile/Mobile';
import DesktopMenu from '../components/menus/desktop/Desktop';
import Footer from '../components/Footer/Footer';
import LoginModals from '../components/LoginModals/index';
import Routes from '../routes';

export default function MasterLayout() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Hidden xsDown>
          <DesktopMenu />
        </Hidden>
        <Hidden smUp>
          <MobileMenu />
        </Hidden>
        <Routes />
        <Footer />
      </div>
      <LoginModals />
    </BrowserRouter>
  );
}
