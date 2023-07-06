import React from 'react';
import useStyles from './index.styles';
import { Button, Typography } from '@material-ui/core';
import S1 from '../../assets/images/s1.png';
import S2 from '../../assets/images/s2.png';
import S3 from '../../assets/images/s3.png';

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.catDiv}>
        <img className={classes.image} src={S1} alt="shoe shit" />
        <Typography variant="h5">کفش مردانه</Typography>
        <div className={classes.buttonDiv}>
          <Button variant="outlined" color="secondary">
            <Typography className={classes.titleButton} variant="subtitle2">
              نمایش کفش ها
            </Typography>
          </Button>
        </div>
      </div>
      <div className={classes.catDiv}>
        <img className={classes.image} src={S2} alt="shoe shit" />
        <Typography variant="h5">کفش زنانه</Typography>
        <div className={classes.buttonDiv}>
          <Button variant="outlined" color="secondary">
            <Typography className={classes.titleButton} variant="subtitle2">
              نمایش کفش ها
            </Typography>
          </Button>
        </div>
      </div>
      <div className={classes.catDiv}>
        <img className={classes.image} src={S3} alt="shoe shit" />
        <Typography variant="h5">کفش بچگانه</Typography>
        <div className={classes.buttonDiv}>
          <Button variant="outlined" color="secondary">
            <Typography className={classes.titleButton} variant="subtitle2">
              نمایش کفش ها
            </Typography>
          </Button>
        </div>
      </div>
      <div className={classes.catDiv}>
        <img className={classes.image} src={S3} alt="shoe shit" />
        <Typography variant="h5">همه دسته ها</Typography>
        <div className={classes.buttonDiv}>
          <Button variant="outlined" color="secondary">
            <Typography className={classes.titleButton} variant="subtitle2">
              نمایش کفش ها
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
}
