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
    [theme.breakpoints.down('xs')]: {
      margin: 4,
      padding: 20,
      height: 260,
    },
  },
  imageLoader: {
    marginTop: 10,
    backgroundColor: 'rgba(50, 53, 134, 0.28)',
    width: '100%',
  },
  textLoader: {
    backgroundColor: 'rgba(50, 53, 134, 0.28)',
    width: '70%',
    marginTop: 10,
  },
  subTitleLoader: {
    backgroundColor: 'rgba(50, 53, 134, 0.28)',
    width: '90%',
    marginTop: 5,
  },
  priceLoader: {
    backgroundColor: 'rgba(50, 53, 134, 0.28)',
    width: '50%',
    marginTop: 5,
  },
}));
