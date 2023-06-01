import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import s from '@/styles/cases/Stack.module.css';

const images = [
  './assets/images/Welcome.png',
  './assets/images/Welcome.png',
  './assets/images/Welcome.png',
  './assets/images/Welcome.png',
  './assets/images/Welcome.png',
  './assets/images/Welcome.png',
];

const ImageSlider = ({ cases }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImgIndex(next),
  };

  return (
    <div className="slider_container">
      <Slider {...settings}>
        {cases.imageSlider.slider.map((img, idx) => (
          <div
            key={idx}
            className={idx === imgIndex ? 'slide activeSlide' : 'slide'}
          >
            <img className={s.imgg} src={img} alt={idx} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
