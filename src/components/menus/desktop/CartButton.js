import React, { useState, useRef } from 'react';
import useStyles from './CartButton.styles';
import { Button, Fade, Typography } from '@material-ui/core';
import Cart from '../../../assets/images/cart.png';
import CartItem from './CartItem';
import useOutsideClick from '../../Hook/useOutsideClick';

export default function CartButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const cart = useRef();
  useOutsideClick(cart, () => setOpen(false));
  return (
    <div className={classes.root} ref={cart}>
      <div className={classes.topDiv} onClick={() => setOpen(!open)}>
        <img src={Cart} alt="cart" className={classes.shopIcon} />
        <div className={classes.badge}>
          <Typography variant="subtitle2" color="textPrimary">
            2
          </Typography>
        </div>
      </div>
      <Fade in={open}>
        <div className={classes.cartContent}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <div className={classes.priceDiv}>
            <Typography variant="body2" color="textPrimary">
              قیمت کل:
            </Typography>
            <Typography variant="h6" color="textPrimary">
              50,000
            </Typography>
          </div>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            size="small"
            className={classes.button}
          >
            نمایش سبد خرید
          </Button>
        </div>
      </Fade>
    </div>
  );
}
