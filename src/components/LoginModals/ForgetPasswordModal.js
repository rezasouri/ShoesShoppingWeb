import React, { useContext } from 'react';
import {
  Modal,
  TextField,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import useStyles from './index.styles';
import { LoginContext } from '../../contexts/LoginContext';
import { SIGNIN, SIGNUP, CODE } from '../../constants/ActionTypes';

const makeTextFieldStyles = makeStyles({
  underline: {
    '&&&:before': {
      borderBottom: 'none',
    },
    '&&:after': {
      borderBottom: 'none',
    },
  },
});

export default function ForgetPasswordModal() {
  const { state, dispatch } = useContext(LoginContext);
  const classes = useStyles();
  const underLineStyles = makeTextFieldStyles();
  const forgetPassword = () => {
    localStorage.setItem('loginCodeType', 'forgetPassword');
    dispatch({ type: CODE });
  };
  return (
    <Modal
      open={state.forgetPassword}
      onClose={() => dispatch({ type: 'closeAll' })}
    >
      <div className={classes.root}>
        <Typography variant="body2">تلفن همراه</Typography>
        <TextField
          classes={{ root: classes.inputContainer }}
          variant="filled"
          fullWidth
          size="medium"
          inputProps={{ className: classes.input }}
          InputProps={{ classes: underLineStyles }}
          placeholder="*********09"
        />
        <Button
          className={classes.button}
          fullWidth
          variant="outlined"
          color="primary"
          onClick={forgetPassword}
        >
          فراموشی رمز عبور
        </Button>
        <Button
          className={classes.buttonTwo}
          fullWidth
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
          onClick={() => dispatch({ type: SIGNIN })}
        >
          بازگشت به فرم ورود
        </Button>
        <Button
          className={classes.buttonTwo}
          fullWidth
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
          onClick={() => dispatch({ type: SIGNUP })}
        >
          ثبت نام
        </Button>
      </div>
    </Modal>
  );
}
