import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './CartItem.styles';
import DeleteIcon from '../../../assets/images/delete.png';
import Shoe1 from '../../../assets/images/shoes.png';

export default function CartItem() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.rightContent}>
        <img src={Shoe1} alt="shoes" className={classes.shoesImg} />
        <div className={classes.deskDiv}>
          <Typography variant="h6" color="textPrimary">
            کفش آدیداس
          </Typography>
          <div className={classes.DeleteDiv}>
            <Typography variant="subtitle2" color="textPrimary">
              30,000
            </Typography>
            <img className={classes.deleteIcon} src={DeleteIcon} alt="delete" />
          </div>
        </div>
      </div>
    </div>
  );
}
