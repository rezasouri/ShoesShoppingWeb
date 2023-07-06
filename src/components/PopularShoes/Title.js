import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './Title.styles';

export default function Title({ title }) {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      item
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      xs={12}
    >
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      <Button size="small" variant="outlined" color="secondary">
        مشاهده همه
      </Button>
    </Grid>
  );
}
