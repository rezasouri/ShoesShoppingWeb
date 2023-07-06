import React, { useState } from 'react';
import useStyles from './Size.styles';
import {
  Checkbox,
  FormControlLabel,
  Typography,
  Collapse,
  Button,
} from '@material-ui/core';

export default function Size() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [sizes, setSizes] = useState([
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
    45,
  ]);
  return (
    <div className={classes.root}>
      <Collapse in={open} collapsedSize={60}>
        <div className={classes.titleDiv} onClick={() => setOpen(!open)}>
          <Typography>سایز کفش</Typography>
        </div>
        <div className={classes.itemDiv}>
          {sizes.map((s) => (
            <FormControlLabel
              style={{ width: 50 }}
              control={<Checkbox name="checkedB" color="secondary" />}
              label={s}
            />
          ))}
        </div>
        <div className={classes.itemDiv}>
          <Button color="secondary" variant="outlined">
            اعمال فیلتر
          </Button>
          <Button color="primary" variant="text">
            <Typography variant="body2">همه رنگ ها</Typography>
          </Button>
        </div>
      </Collapse>
    </div>
  );
}
