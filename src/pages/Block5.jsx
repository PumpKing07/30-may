import React from 'react'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import first from '../images/1s.png'
import second from '../images/2s.png'
import third from '../images/3s.png'

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (
    <Slider {...settings}>
      <div>
        <img src={first} alt='slide-1' />
      </div>
      <div>
        <img src={second} alt='slide-2' />
      </div>
      <div>
        <img src={third} alt='slide-3' />
      </div>
    </Slider>
  );
};

const Block5 = () => {
  return (
    <div>
      <SimpleCarousel/>
    </div>
  );
};

export default Block5;