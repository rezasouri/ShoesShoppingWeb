import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: '1005',
    height: 50,
    borderBottomColor: theme.palette.border.drawerItemBorder,
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIcon: {
    width: 25,
    marginRight: 10,
  },
  title: {
    flex: 1,
  },
}));
