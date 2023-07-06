import React, { useState } from 'react';
import useStyles from './Sort.styles';
import {
  FormControlLabel,
  Typography,
  Collapse,
  Radio,
  RadioGroup,
} from '@material-ui/core';

export default function Sort() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open} collapsedSize={60}>
        <div className={classes.titleDiv} onClick={() => setOpen(!open)}>
          <Typography>مرتب سازی بر اساس</Typography>
        </div>
        <div className={classes.itemDiv}>
          <RadioGroup>
            <FormControlLabel
              value="0"
              control={<Radio color="secondary" />}
              label="محبوب ترین"
            />
            <FormControlLabel
              value="1"
              control={<Radio color="secondary" />}
              label="ارزان ترین"
            />
            <FormControlLabel
              value="2"
              control={<Radio color="secondary" />}
              label="گران ترین"
            />
          </RadioGroup>
        </div>
      </Collapse>
    </div>
  );
}
