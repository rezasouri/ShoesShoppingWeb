import { Collapse, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import Brands from './Brands';
import Title from './Title';
import Category from './Category';
import Sort from './Sort';
import Price from './Price';
import Color from './Color';
import Size from './Size';

export default function Index() {
  const [open, setOpen] = useState(false);
  return (
    <Collapse in={open || window.innerWidth > 580} collapsedSize={45}>
      <Grid container direction="column">
        <Title open={open} onClick={() => setOpen(!open)} title="فیلتر ها" />
        <Brands />
        <Sort />
        <Category />
        <Price />
        <Color />
        <Size />
      </Grid>
    </Collapse>
  );
}
