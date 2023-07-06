import { Hidden, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './title.styles';
import FilterImage from '../../assets/images/filter.png';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Title({ title, onClick, open }) {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={onClick}>
      <img className={classes.filterIcon} src={FilterImage} alt="filtericon" />
      <Typography className={classes.title} variant="h5">
        {title}
      </Typography>
      <Hidden smUp>
        {open ? (
          <ExpandLessIcon fontSize="large" />
        ) : (
          <ExpandMoreIcon fontSize="large" />
        )}
      </Hidden>
    </div>
  );
}
