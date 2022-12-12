'use client';

import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';

export default function Carousel(props) {
  const [isMobile, setIsMobile] = useState(false);

  const setDeviceType = () => (window.innerWidth < 900
    ? setIsMobile(true)
    : setIsMobile(false));

  useEffect(() => {
    setDeviceType();
    window.addEventListener('resize', () => setDeviceType());
  }, []);

  return (
    <ReactCarousel
    //   autoPlay
      infiniteLoop
      centerMode
      emulateTouch
      autoFocus
      useKeyboardArrows
      centerSlidePercentage={isMobile ? 90 : 75}
    >
      {props.children}
    </ReactCarousel>
  );
}
