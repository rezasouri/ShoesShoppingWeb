import React from 'react';
import useStyles from './index.styles';
import { Container, Grid } from '@material-ui/core';
import FilterList from '../../components/Filter';

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid className={classes.root} container>
        <Grid className={classes.filterGrid} item lg={3}>
          <FilterList />
        </Grid>
        <Grid className={classes.contentGrid} item lg={9}></Grid>
      </Grid>
    </Container>
  );
}
