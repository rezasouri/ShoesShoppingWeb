import React, { useEffect, useState } from 'react';
import Item from './Item';
import { Grid, makeStyles } from '@material-ui/core';
import ItemLoader from './ItemLoader';
import S1 from '../../assets/images/s1.png';

const useStyles = makeStyles((theme) => ({
  root: {
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'nowrap',
      overflowX: 'scroll',
    },
  },
}));

export default function Mens() {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      className={classes.root}
    >
      {loading ? (
        <>
          <ItemLoader />
          <ItemLoader />
          <ItemLoader />
          <ItemLoader />
          <ItemLoader />
        </>
      ) : (
        <>
          <Item image={S1} />
          <Item image={S1} />
          <Item image={S1} />
          <Item image={S1} />
          <Item image={S1} />
        </>
      )}
    </Grid>
  );
}
