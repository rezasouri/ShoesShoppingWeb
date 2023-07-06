import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    '&:focus': {
      outline: 'none',
    },
  },
  inputDiv: {
    padding: 10,
    border: '1px solid #44434a',
    flex: 1,
    // marginRight: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unitPrice: {
    paddingLeft: 10,
  },
}));
