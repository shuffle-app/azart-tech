import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import s from '@/styles/main/AdaptiveSlider.module.css';
import { useWindowSize } from '@/utils/hooks/useWindowSize';

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

const AdaptiveSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = activeIndex === 7 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  const slideLeft = () => {
    const newIndex = activeIndex === 0 ? 7 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const slideRight = () => {
    const newIndex = activeIndex === 7 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slideRight(),
    onSwipedRight: () => slideLeft(),
  });

  const leftIndex = activeIndex === 0 ? 7 : activeIndex - 1;
  const rightIndex = activeIndex === 7 ? 0 : activeIndex + 1;
  const centerIndex = activeIndex;

  const renderCard = ({ slide, type, index }) => {
    const className =
      type === 'left'
        ? s.sliderLeftCard
        : type === 'right'
        ? s.sliderRightCard
        : type == 'center'
        ? s.activeBlock
        : s.sliderInactiveCard;

    return (
      <div
        key={index}
        className={`${s.sliderBlock} ${className}`}
        onClick={nextSlide}
      >
        <div className={s.slideContent}>
          <img
            src={slide.image}
            className={s.slideImage}
            alt={`Slide ${type}`}
          />
          <div className={s.slideNumber}>{index + 1}</div>
        </div>
      </div>
    );
  };

  return (
    <div className={s.sliderWrapper}>
      <div className={s.sliderContainer} {...handlers}>
        {slidesData.map((slide, index) => {
          const isLeft = index === leftIndex;
          const isRight = index === rightIndex;
          const isCenter = index === centerIndex;

          const type = isLeft
            ? 'left'
            : isRight
            ? 'right'
            : isCenter
            ? 'center'
            : 'inactive';

          return renderCard({ slide, type: type, index });
        })}
      </div>
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={`${s.slideText} ${
            index === activeIndex ? s.activeText : ''
          }`}
        >
          {slide.text}
        </div>
      ))}
    </div>
  );
};

export default AdaptiveSlider;
