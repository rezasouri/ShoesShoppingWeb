import React from 'react';
import useStyles from './itemLoader.styles';
import { Skeleton } from '@material-ui/lab';

export default function ItemLoader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton
        className={classes.imageLoader}
        variant="circle"
        width={150}
        height={150}
        animation="pulse"
      />
      <Skeleton
        className={classes.textLoader}
        variant="text"
        animation="pulse"
      />
      <Skeleton
        className={classes.subTitleLoader}
        variant="text"
        animation="pulse"
      />
      <Skeleton
        className={classes.priceLoader}
        variant="text"
        animation="pulse"
      />
      {/* <img className={classes.image} src={S3} alt="shoes" />
      <Typography variant="h5">کفش اول</Typography>
      <Typography className={classes.subTitle} variant="body2">
        زیر عنوان کفش است
      </Typography>
      <Typography className={classes.subTitle} variant="body2">
        70,000
      </Typography>
      <div className={classes.pointDiv}>
        <Typography color="textPrimary" variant="body2">
          4.9
        </Typography>
      </div> */}
    </div>
  );
}
