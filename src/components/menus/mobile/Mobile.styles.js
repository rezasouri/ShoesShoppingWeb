import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 70,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'cneter',
    backgroundColor: '#131a21',
    boxShadow: '1px 0px 3px 0px #3b3939',
  },
  rightMenu: {
    width: 60,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftMenu: {
    width: 60,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
  centerMenu: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandLogo: {
    width: 110,
    borderRadius: 10,
  },
}));
