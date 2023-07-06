import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: 240,
    height: 270,
    backgroundColor: '#131a21',
    border: '1px solid #3d495caa',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      margin: 4,
      padding: 20,
      height: 260,
    },
  },
  image: {
    width: '70%',
    height: '65%',
    padding: '10px 0px',
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.5)',
      transition: '0.5s',
    },
    [theme.breakpoints.down('xs')]: {
      width: 150,
    },
  },
  subTitle: {
    marginTop: 10,
    color: '#6ca9bd',
  },
  pointDiv: {
    position: 'absolute',
    right: 3,
    top: 3,
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#102344',
    borderRadius: 40,
  },
}));
