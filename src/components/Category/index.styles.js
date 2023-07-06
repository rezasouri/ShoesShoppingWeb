import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {},
  image: {
    width: 89,
    height: 89,
    marginRight: 10,
  },
  catDiv: {
    width: '100%',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#131a21',
    borderRadius: 5,
    marginBottom: 10,
    border: '1px solid #3d495caa',
    position: 'relative',
  },
  titleButton: {
    fontSize: 10,
  },
  buttonDiv: {
    position: 'absolute',
    bottom: 4,
    right: 4,
  },
}));
