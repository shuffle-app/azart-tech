import { useEffect, useRef } from 'react';
import s from '@/styles/main/TeamSlider.module.css';

const ScrollableContainer = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseWheel = (event) => {
      event.preventDefault();

      const scrollDistance = event.deltaY || event.detail || -event.wheelDelta;

      container.scrollLeft += scrollDistance;
    };

    // const handleMouseDown = (event) => {
    //   const startX = event.pageX;
    //   const scrollLeft = container.scrollLeft;
    //
    //   const handleMouseMove = (event) => {
    //     const moveX = startX - event.pageX;
    //     container.scrollLeft = scrollLeft + moveX;
    //   };
    //
    //   const handleMouseUp = () => {
    //     container.removeEventListener('mousemove', handleMouseMove);
    //   };
    //
    //   container.addEventListener('mousemove', handleMouseMove);
    //   container.addEventListener('mouseup', handleMouseUp);
    // };

    container.addEventListener('wheel', handleMouseWheel);

    return () => {
      container.removeEventListener('wheel', handleMouseWheel);
    };
  }, []);

  return (
    <div ref={containerRef} className={`${s.team_slider} ${s.container}`}>
      {children}
    </div>
  );
};

export default ScrollableContainer;
