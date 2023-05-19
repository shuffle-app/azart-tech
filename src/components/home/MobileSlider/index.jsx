import Slider from 'react-slick';
import s from './MobileSlider.module.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const slidesData = [
  {
    text: 'brief',
    image: './assets/images/01.svg',
  },
  {
    text: 'business-analysis & creating a CJM',
    image: './assets/images/02.svg',
  },
  {
    text: 'prototype and its testing (CustDevs)',
    image: './assets/images/03.svg',
  },
  {
    text: 'brending',
    image: './assets/images/04.svg',
  },
  {
    text: 'visual concept (ux-ui MVP/MLP)',
    image: './assets/images/05.svg',
  },
  {
    text: 'development through testing',
    image: './assets/images/06.svg',
  },
  {
    text: 'correcting MLP & Final launch',
    image: './assets/images/07.svg',
  },
  {
    text: 'digital-marketing',
    image: './assets/images/08.svg',
  },
];

export const MobileSlider = () => {
  return (
    <div className={s.sliderWrapper}>
      <div className={s.sliderContainer}>
        <Slider {...settings}>
          {slidesData.map((slide, index) => {
            return (
              <div key={index}>
                <div className={s.slideContent}>
                  <img
                    src={slide.image}
                    className={s.slideImage}
                    alt={`Slide ${index + 1}`}
                  />
                  <div className={s.slideNumber}>{index + 1}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MobileSlider;
