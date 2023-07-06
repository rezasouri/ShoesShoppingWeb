import React from 'react';
import useStyles from './index.styles';
import { Container, Grid } from '@material-ui/core';
import LazyLoad from 'react-lazyload';
import Slider from '../../components/Slider/Index';
import Categories from '../../components/Category/Index';
import PopularShoes from '../../components/PopularShoes/index';

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <LazyLoad height={500}>
        <Grid className={classes.topGrid} direction="row" container>
          <Grid className={classes.sliderGrid} item lg={8} xs={12}>
            <Slider />
          </Grid>
          <Grid className={classes.catGrid} item lg={4} xs={12}>
            <Categories />
          </Grid>
        </Grid>
      </LazyLoad>
      <PopularShoes />
    </Container>
  );
}
