import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    paddingBottom: 10,
  },
  titleDiv: {
    padding: 15,
    backgroundColor: '#10102d',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    cursor: 'pointer',
    height: 60,
  },
  itemDiv: {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1d1d3b',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
