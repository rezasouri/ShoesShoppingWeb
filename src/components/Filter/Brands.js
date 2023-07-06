import React from 'react';
import useStyles from './brands.styles';
import BrandItem from './BrandItem';

export default function Brands() {
  const classes = useStyles();
  const brands = ['آدیداس', 'پوما', 'نایکی', 'هامتو'];
  return (
    <div className={classes.root}>
      {brands.map((brand) => (
        <BrandItem key={brand} title={brand} />
      ))}
    </div>
  );
}
