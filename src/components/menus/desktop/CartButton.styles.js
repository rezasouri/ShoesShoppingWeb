import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 5,
    width: 80,
    height: '100%',
  },
  topDiv: {
    transition: '0.5s',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.5,
      transition: '0.5s',
    },
    [theme.breakpoints.down('xs')]: {
      '&:hover': {
        opacity: 1,
        transition: '0.5s',
      },
    },
  },
  shopIcon: {
    width: 35,
  },
  badge: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    top: 0,
    left: -5,
  },
  cartContent: {
    width: 300,
    backgroundColor: '#2d3844',
    position: 'absolute',
    top: 72,
    right: 5,
    borderRadius: 5,
    padding: 15,
    boxShadow: '0px 0px 1px 0px #57b0d6',
    zIndex: 10,
  },
  priceDiv: {
    padding: 10,
    borderBottomColor: theme.palette.border.cartItemBorder,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 10,
  },
}));
