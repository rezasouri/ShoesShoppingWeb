import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: 300,
    height: 'auto',
    backgroundColor: '#1a222a',
    padding: 25,
    margin: 'auto',
    marginTop: 80,
    '&:focus': {
      outline: 'none',
    },
    borderRadius: 5,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  rootSignUp: {
    width: 500,
    height: 'auto',
    backgroundColor: '#1a222a',
    padding: 25,
    margin: 'auto',
    marginTop: 80,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    '&:focus': {
      outline: 'none',
    },
    borderRadius: 5,
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  inputContainer: {
    backgroundColor: '#2a3a48',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    border: '1px solid #203d75',
  },
  input: {
    padding: 10,
    textAlign: 'right',
  },
  button: {
    marginTop: 20,
    color: '#d4d4d6',
  },
  buttonTwo: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'left',
    color: '#d4d4d6',
  },
  buttonLabel: {
    justifyContent: 'left',
  },
  formGrid: {
    paddingRight: 7,
    paddingLeft: 7,
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  codeDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  counterText: {
    textAlign: 'center',
    width: '100%',
    marginTop: 15,
    fontSize: 12,
    color: '#b3aeae',
  },
  buttonText: {
    fontSize: 12,
    color: '#b3aeae',
  },
  sendCodeAgainButton: {
    marginTop: 15,
  },
}));
