import React, { useState } from 'react';
import useStyles from './Price.styles';
import { Typography, Collapse, Button } from '@material-ui/core';
import PriceInput from './PriceInput';

export default function Price() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open} collapsedSize={60}>
        <div className={classes.titleDiv} onClick={() => setOpen(!open)}>
          <Typography>تعیین محدوده قیمت</Typography>
        </div>
        <div className={classes.itemDiv}>
          <PriceInput placeholder="حداقل قیمت" />
          <PriceInput placeholder="حداکثر قیمت" />
          <Button
            className={classes.button}
            color="secondary"
            variant="outlined"
          >
            اعمال قیمت
          </Button>
        </div>
      </Collapse>
    </div>
  );
}
