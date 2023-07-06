import React, { useState } from 'react';
import useStyles from './Color.styles';
import { Typography, Collapse, Button } from '@material-ui/core';
import ColorItem from './ColorItem';

export default function Color() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([
    { id: 0, color: '#f44336' },
    { id: 1, color: '#e91e63' },
    { id: 2, color: '#9c27b0' },
    { id: 3, color: '#673ab7' },
    { id: 4, color: '#3f51b5' },
    { id: 5, color: '#2196f3' },
    { id: 6, color: '#03a9f4' },
    { id: 7, color: '#00bcd4' },
    { id: 8, color: '#009688' },
    { id: 9, color: '#4caf50' },
    { id: 10, color: '#8bc34a' },
    { id: 11, color: '#cddc39' },
    { id: 12, color: '#ffeb3b' },
    { id: 13, color: '#ff5722' },
    { id: 14, color: '#212121' },
  ]);
  return (
    <div className={classes.root}>
      <Collapse in={open} collapsedSize={60}>
        <div className={classes.titleDiv} onClick={() => setOpen(!open)}>
          <Typography>انتخاب رنگ</Typography>
        </div>
        <div className={classes.itemDiv}>
          {data.map((item) => (
            <ColorItem key={item.id} color={item.color} />
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
