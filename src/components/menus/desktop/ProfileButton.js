import React, { useState, useContext, useRef } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '../../../assets/images/avatar.png';
import useStyles from './ProfileButton.styles';
import { Button, Fade, Typography } from '@material-ui/core';
import { LoginContext } from '../../../contexts/LoginContext';
import { SIGNIN, SIGNUP } from '../../../constants/ActionTypes';
import useOutsideClick from '../../Hook/useOutsideClick';

export default function ProfileButton() {
  const { dispatch } = useContext(LoginContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const profilebtn = useRef();
  useOutsideClick(profilebtn, () => setOpen(false));
  return (
    <div className={classes.root} ref={profilebtn}>
      <div className={classes.topDiv} onClick={() => setOpen(!open)}>
        <ExpandMoreIcon className={classes.BottomIcon} />
        <img src={Avatar} alt="avatar" className={classes.profileImg} />
      </div>
      <Fade in={open}>
        <div className={classes.menuContent}>
          {localStorage.token ? (
            <>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                <Typography variant="subtitle2">پروفایل کاربری</Typography>
              </Button>
              <Button variant="text" color="primary" size="small" fullWidth>
                خروج
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                onClick={() => {
                  setOpen(false);
                  dispatch({ type: SIGNIN });
                }}
              >
                ورود
              </Button>
              <Button
                onClick={() => {
                  setOpen(false);
                  dispatch({ type: SIGNUP });
                }}
                variant="text"
                color="primary"
                size="small"
                fullWidth
              >
                ثبت نام
              </Button>
            </>
          )}
        </div>
      </Fade>
    </div>
  );
}
