import React, { useEffect, useState } from 'react';
import Item from './Item';
import { Grid, makeStyles } from '@material-ui/core';
import ItemLoader from './ItemLoader';
import S3 from '../../assets/images/s3.png';

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

export default function Kids() {
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
          <Item image={S3} />
          <Item image={S3} />
          <Item image={S3} />
          <Item image={S3} />
          <Item image={S3} />
        </>
      )}
    </Grid>
  );
}
