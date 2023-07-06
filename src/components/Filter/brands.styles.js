import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    paddingBottom: 10,
    borderBottom: '1px solid #393c41',
  },
  brandItemRoot: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    cursor: 'pointer',
    border: '1px solid #2b2929',
    display: 'flex',
    flexDirection: 'row',
  },
  iconAdd: {
    marginLeft: 5,
  },
}));
