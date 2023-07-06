import React from 'react';
import useStyles from './MenuItems.styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import HomeIcon from '../../../assets/images/home.png';
import faqIcon from '../../../assets/images/faq.png';
import blogIcon from '../../../assets/images/blog.png';
import contactIcon from '../../../assets/images/contact.png';
import userIcon from '../../../assets/images/user.png';

export default function MenuItems() {
  const classes = useStyles();
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={classes.root}>
      <div className={classes.topDrawer}>
        <img src={logo} alt="logo" className={classes.drawerLogo} />
      </div>
      <div>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <img src={HomeIcon} alt="home" className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/' ? 'initial' : 'textSecondary'}
              >
                صفحه اصلی
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/faq">
            <ListItemIcon>
              <img src={faqIcon} alt="faq" className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/faq' ? 'initial' : 'textSecondary'}
              >
                سوالات پر تکرار
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/blog">
            <ListItemIcon>
              <img src={blogIcon} alt="home" className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/blog' ? 'initial' : 'textSecondary'}
              >
                بلاگ
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemIcon>
              <img src={contactIcon} alt="home" className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/contact' ? 'initial' : 'textSecondary'}
              >
                تماس با ما
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img src={userIcon} alt="home" className={classes.menuIcon} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body2" color="textSecondary">
                ورود / ثبت نام
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
