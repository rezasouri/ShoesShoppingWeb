import React, { useState } from 'react';
import useStyles from './brands.styles';
import { Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

export default function BrandItem({ title }) {
  const [active, setActive] = useState(false);
  const classes = useStyles();
  return (
    <div
      onClick={() => setActive(!active)}
      style={{
        backgroundColor: active ? '#801f88' : 'transparent',
      }}
      className={classes.brandItemRoot}
    >
      <Typography variant="body2">{title}</Typography>
      {active ? (
        <CloseIcon fontSize="small" className={classes.iconAdd} />
      ) : (
        <AddIcon fontSize="small" className={classes.iconAdd} />
      )}
    </div>
  );
}
