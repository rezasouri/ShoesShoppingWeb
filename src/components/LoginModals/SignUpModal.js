import React, { useContext } from 'react';
import {
  Modal,
  TextField,
  makeStyles,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
import useStyles from './index.styles';
import { LoginContext } from '../../contexts/LoginContext';
import { SIGNIN, CODE } from '../../constants/ActionTypes';

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

export default function SignUpModal() {
  const { state, dispatch } = useContext(LoginContext);
  const classes = useStyles();
  const underLineStyles = makeTextFieldStyles();
  const signUp = () => {
    localStorage.setItem('loginCodeType', 'signUp');
    dispatch({ type: CODE });
  };
  return (
    <Modal open={state.signup} onClose={() => dispatch({ type: 'closeAll' })}>
      <div className={classes.rootSignUp}>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <Typography variant="body2">تلفن همراه:</Typography>
          <TextField
            classes={{ root: classes.inputContainer }}
            variant="filled"
            fullWidth
            size="medium"
            inputProps={{ className: classes.input }}
            InputProps={{ classes: underLineStyles }}
            placeholder="*********09"
          />
        </Grid>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <Typography variant="body2">نام و نام خانوادگی:</Typography>
          <TextField
            classes={{ root: classes.inputContainer }}
            variant="filled"
            fullWidth
            size="medium"
            inputProps={{ className: classes.input }}
            InputProps={{ classes: underLineStyles }}
          />
        </Grid>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <Typography variant="body2">رمز عبور:</Typography>
          <TextField
            classes={{ root: classes.inputContainer }}
            variant="filled"
            fullWidth
            size="medium"
            inputProps={{ className: classes.input }}
            InputProps={{ classes: underLineStyles }}
          />
        </Grid>
        <Grid className={classes.formGrid} item lg={6} xs={12}>
          <Typography variant="body2">تکرار رمز عبور:</Typography>
          <TextField
            classes={{ root: classes.inputContainer }}
            variant="filled"
            fullWidth
            size="medium"
            inputProps={{ className: classes.input }}
            InputProps={{ classes: underLineStyles }}
          />
        </Grid>
        <Grid className={classes.formGrid} item lg={12} xs={12}>
          <Button
            className={classes.button}
            fullWidth
            variant="outlined"
            color="primary"
            onClick={signUp}
          >
            ثبت نام
          </Button>
        </Grid>
        <Grid className={classes.formGrid} item lg={12} xs={12}>
          <Button
            className={classes.buttonTwo}
            fullWidth
            variant="text"
            color="primary"
            classes={{ label: classes.buttonLabel }}
            onClick={() => dispatch({ type: SIGNIN })}
          >
            قبلا ثبت نام کرده اید؟
          </Button>
        </Grid>
      </div>
    </Modal>
  );
}
