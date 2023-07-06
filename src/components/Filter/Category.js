import React, { useState } from 'react';
import useStyles from './Category.styles.js';
import {
  Checkbox,
  FormControlLabel,
  Typography,
  Collapse,
} from '@material-ui/core';

export default function Category() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open} collapsedSize={60}>
        <div className={classes.titleDiv} onClick={() => setOpen(!open)}>
          <Typography>دسته بندی ها</Typography>
        </div>
        <div className={classes.itemDiv}>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="secondary" />}
            label="مردانه"
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="secondary" />}
            label="زنانه"
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="secondary" />}
            label="بچگانه"
          />
        </div>
      </Collapse>
    </div>
  );
}
