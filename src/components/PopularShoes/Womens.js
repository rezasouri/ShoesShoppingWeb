import React, { useEffect, useState } from 'react';
import Item from './Item';
import { Grid, makeStyles } from '@material-ui/core';
import ItemLoader from './ItemLoader';
import S2 from '../../assets/images/s2.png';

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

export default function Womens() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
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
          <Item image={S2} />
          <Item image={S2} />
          <Item image={S2} />
          <Item image={S2} />
          <Item image={S2} />
        </>
      )}
    </Grid>
  );
}
