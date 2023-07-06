import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  titleDiv: {
    marginBottom: 10,
    width: '100%',
    paddingBottom: 15,
    position: 'relative',
    '&:after': {
      content: "''",
      position: 'absolute',
      width: 80,
      height: 4,
      bottom: 0,
      borderRadius: 4,
      backgroundColor: '#00c1c9',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      width: 120,
      height: 4,
      bottom: 0,
      borderRadius: 4,
      backgroundColor: '#bffcff',
    },
    // borderBottomColor: '#00c1c9',
    // borderBottomStyle: 'solid',
    // borderBottomWidth: 1,
  },
}));
