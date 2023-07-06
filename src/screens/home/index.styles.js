import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  topGrid: {
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.up('md')]: {
      height: 500,
    },
  },
  sliderGrid: {
    height: 500,
    padding: 10,
    paddingLeft: 0,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 10,
      height: 300,
    },
  },
  catGrid: {
    height: 500,
    padding: 10,
    paddingRight: 0,
    [theme.breakpoints.down('xs')]: {
      paddingRight: 10,
      height: 'auto',
    },
  },
  itemsGrid: {
    height: 180,
    marginTop: 10,
    marginBottom: 10,
  },
}));
