import React, { useState } from 'react';
import useStyles from './PriceInput.styles';
import { Typography } from '@material-ui/core';

export default function PriceInput({ placeholder }) {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const GetPriceText = (val) => {
    let result = '';
    let j = 0;
    for (let i = val.length; i > 0; i -= 1) {
      if (j === 3) {
        result = `,${result}`;
        j = 0;
      }
      result = val[i - 1] + result;
      j += 1;
    }
    return result;
  };

  return (
    <div className={classes.root}>
      <div className={classes.inputDiv}>
        <input
          value={value}
          onChange={(e) => {
            let val = e.target.value;
            setValue(GetPriceText(val.replace(/,/g, '')));
          }}
          placeholder={placeholder}
          className={classes.input}
        />
        <Typography className={classes.unitPrice} variant="body2">
          تومان
        </Typography>
      </div>
    </div>
  );
}
