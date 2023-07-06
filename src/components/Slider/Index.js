import React from 'react';
import Carousel from 'react-material-ui-carousel';
import S1 from '../../assets/images/s1.png';
import S2 from '../../assets/images/s2.png';
import S3 from '../../assets/images/s3.png';
import Item from './Item';

export default function Index() {
  let data = [
    {
      id: 1,
      title: 'کفش اول',
      image: S1,
      price: '50,000',
      subTitle: 'این زیر عنوان کفش است',
      discount: 15,
    },
    {
      id: 2,
      title: 'کفش دوم',
      image: S2,
      price: '60,000',
      subTitle: 'این زیر عنوان کفش است',
      discount: 15,
    },
    {
      id: 3,
      title: 'کفش سوم',
      image: S3,
      price: '70,000',
      subTitle: 'این زیر عنوان کفش است',
      discount: 15,
    },
  ];
  return (
    <Carousel animation="fade">
      {data.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}
