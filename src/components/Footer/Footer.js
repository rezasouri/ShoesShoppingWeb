import React from 'react';
import useStyles from './Footer.styles';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import Title from '../TitleWithBottomBorder/Index';

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="row">
      <Container maxWidth="lg">
        <Grid className={classes.root} container direction="row">
          <Grid className={classes.item} item lg={4} xs={12}>
            <Title title="فروشگاه کفش" />
            <Typography
              className={classes.address}
              variant="body2"
              color="textSecondary"
            >
              تهران میدان توحید، خیابان دکتر قریب، پلاک 26، ساختمان شباهنگ
            </Typography>
            <Typography
              className={classes.address}
              variant="body2"
              color="textSecondary"
            >
              تلفن تماس: 02166414478
            </Typography>
          </Grid>
          <Grid className={classes.item} item lg={3} xs={12}>
            <Title title="ویژگی ها" />
            <Typography
              className={classes.address}
              variant="body2"
              color="textSecondary"
            >
              ارسال رایگان
            </Typography>
            <Typography
              className={classes.address}
              variant="body2"
              color="textSecondary"
            >
              امکان برگشت محصول تا هفت روز
            </Typography>
            <Typography
              className={classes.address}
              variant="body2"
              color="textSecondary"
            >
              کفش های برند اصل
            </Typography>
            <Typography
              className={classes.address}
              variant="body2"
              color="textSecondary"
            >
              پایین تر از قیمت بازار
            </Typography>
          </Grid>
          <Grid className={classes.item} item lg={3} xs={12}>
            <Title title="برند ها" />
            <Button className={classes.bradButton} variant="text">
              <Typography
                className={classes.address}
                variant="body2"
                color="primary"
              >
                آدیداس
              </Typography>
            </Button>
            <Button className={classes.bradButton} variant="text">
              <Typography
                className={classes.address}
                variant="body2"
                color="primary"
              >
                نایکی
              </Typography>
            </Button>
            <Button className={classes.bradButton} variant="text">
              <Typography
                className={classes.address}
                variant="body2"
                color="primary"
              >
                پوما
              </Typography>
            </Button>
          </Grid>
          <Grid className={classes.item} item lg={2} xs={12}>
            <Title title="لینک های مفید" />
            <Button className={classes.bradButton} variant="text">
              <Typography
                className={classes.address}
                variant="body2"
                color="primary"
              >
                سوالات پر تکرار
              </Typography>
            </Button>
            <Button className={classes.bradButton} variant="text">
              <Typography
                className={classes.address}
                variant="body2"
                color="primary"
              >
                بلاگ
              </Typography>
            </Button>
            <Button className={classes.bradButton} variant="text">
              <Typography
                className={classes.address}
                variant="body2"
                color="primary"
              >
                تماس با ما
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
