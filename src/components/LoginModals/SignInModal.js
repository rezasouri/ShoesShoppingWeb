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
import { SIGNUP, FORGET_PASSWORD } from '../../constants/ActionTypes';

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

export default function SignInModal() {
  const { state, dispatch } = useContext(LoginContext);
  const classes = useStyles();
  const underLineStyles = makeTextFieldStyles();
  return (
    <Modal open={state.signin} onClose={() => dispatch({ type: 'closeAll' })}>
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
        <Typography variant="body2">رمز عبور</Typography>
        <TextField
          classes={{ root: classes.inputContainer }}
          variant="filled"
          fullWidth
          size="medium"
          inputProps={{ className: classes.input }}
          InputProps={{ classes: underLineStyles }}
        />
        <Button
          className={classes.button}
          fullWidth
          variant="outlined"
          color="primary"
        >
          ورود
        </Button>
        <Button
          className={classes.buttonTwo}
          fullWidth
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
          onClick={() => dispatch({ type: SIGNUP })}
        >
          ثبت نام نکرده اید؟
        </Button>
        <Button
          className={classes.buttonTwo}
          fullWidth
          variant="text"
          color="primary"
          classes={{ label: classes.buttonLabel }}
          onClick={() => dispatch({ type: FORGET_PASSWORD })}
        >
          فراموشی رمز عبور
        </Button>
      </div>
    </Modal>
  );
}
