import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    marginTop: 30,
    marginBottom: 25,
    paddingTop: 5,
    paddingBottom: 5,
    position: 'relative',
    // '&:after': {
    //   content: "''",
    //   position: 'absolute',
    // },
    '&:before': {
      content: "''",
      position: 'absolute',
      width: 4,
      height: '100%',
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 10,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 10,
      marginRight: 10,
      marginLeft: 10,
    },
  },
  title: {
    marginLeft: 15,
  },
}));
