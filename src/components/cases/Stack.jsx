import s from '@/styles/cases/Stack.module.css'
import React, { useState } from 'react';
import { useSwipeable } from "react-swipeable";
import Swipeable from "react-swipeable";



const Stack = () => {
    
    const [activeIndex, setActiveIndex] = useState(2);
  const [sliderWidth, setSliderWidth] = useState(100);

  const slideLeft = () => {
    setActiveIndex(activeIndex - 1);
  };

  const slideRight = () => {
    setActiveIndex(activeIndex + 1);
  };

  const handleSwipe = (direction) => {
    if (direction === "left") {
      slideRight();
    } else {
      slideLeft();
    }
  };

  const handleResize = () => {
    const slider = document.querySelector(".slider");
    if (slider) {
      setSliderWidth(slider.offsetWidth);
    }
  };

  


    return (
        <section className={`container ${s.section}`}>
            <div className={s.stacks}>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>UX/UI</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>UX/UI</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>UX/UI</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>UX/UI</p>
            </div>
            <div className="slider-container">

            </div>
        </section>
    )
}

export default Stack