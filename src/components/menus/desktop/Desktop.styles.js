import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 70,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'cneter',
    backgroundColor: '#131a21',
    boxShadow: '1px 0px 3px 0px #3b3939',
  },
  brandDiv: {
    width: 150,
  },
  brandImg: {
    width: '90%',
    borderRadius: 10,
    marginTop: -3,
  },
  menuDiv: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    height: '100%',
  },
  activeMenu: {
    color: theme.palette.text.primary,
  },
  inactiveMenu: {
    color: theme.palette.text.inActiveMenu,
  },
  activeMenuDiv: {
    borderBottomColor: '#00c1c9',
    borderBottomWidth: 1,
    borderRadius: 5,
    borderBottomStyle: 'solid',
  },
  leftMenuDiv: {
    height: '100',
    paddingRight: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}));
