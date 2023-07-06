import { Grid } from '@material-ui/core';
import React from 'react';
import LazyLoad from 'react-lazyload';
import Title from './Title';
import Mens from './Mens';
import Womens from './Womens';
import Kids from './Kids';

export default function index() {
  return (
    <>
      <LazyLoad height={365}>
        <Grid container style={{ marginBottom: 20, height: 365 }}>
          <Title title="پر فروش های مردانه" />
          <Mens />
        </Grid>
      </LazyLoad>
      <LazyLoad height={365}>
        <Grid container style={{ marginBottom: 20, height: 365 }}>
          <Title title="پر فروش های زنانه" />
          <Womens />
        </Grid>
      </LazyLoad>
      <LazyLoad height={365}>
        <Grid container style={{ marginBottom: 20, height: 365 }}>
          <Title title="پر فروش های بچگانه" />
          <Kids />
        </Grid>
      </LazyLoad>
    </>
  );
}
