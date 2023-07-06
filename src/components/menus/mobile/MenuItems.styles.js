import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: 250,
    height: '100%',
    backgroundColor: '#131a21',
    padding: 10,
  },
  topDrawer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: theme.palette.border.drawerItemBorder,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
  drawerLogo: {
    width: 150,
    borderRadius: 10,
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
}));
