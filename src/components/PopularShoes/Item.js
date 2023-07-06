import React from 'react';
import useStyles from './Item.styles';
import { Typography } from '@material-ui/core';

export default function Item({ image }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.image} src={image} alt="shoes" />
      <Typography variant="h5">کفش اول</Typography>
      <Typography className={classes.subTitle} variant="body2">
        زیر عنوان کفش است
      </Typography>
      <Typography className={classes.subTitle} variant="body2">
        70,000
      </Typography>
      <div className={classes.pointDiv}>
        <Typography color="textPrimary" variant="body2">
          4.9
        </Typography>
      </div>
    </div>
  );
}
