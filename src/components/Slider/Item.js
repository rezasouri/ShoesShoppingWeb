import React from 'react';
import useStyles from './Item.styles';
import { Button, Typography } from '@material-ui/core';

export default function Item({ item }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rightSlider}>
        <img className={classes.image} src={item.image} alt="shoe" />
      </div>
      <div className={classes.leftSlider}>
        <Typography variant="h2">{item.title}</Typography>
        <Typography className={classes.subTitle} variant="subtitle1">
          {item.subTitle}
        </Typography>
        <Typography className={classes.subTitle} variant="body1">
          {item.price} تومان
        </Typography>
      </div>
      <div className={classes.discountDiv}>
        <Typography variant="subtitle2">{item.discount}% تخفیف</Typography>
      </div>
      <div className={classes.buttonDiv}>
        <Button variant="outlined" color="primary">
          مشاهده جزئیات
        </Button>
      </div>
    </div>
  );
}
