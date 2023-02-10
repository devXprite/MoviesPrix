'use client';

import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';

export default function Carousel(props) {
  const [isMobile, setIsMobile] = useState(true);

  const setDeviceType = () => (window.innerWidth < 900
    ? setIsMobile(true)
    : setIsMobile(false));

  useEffect(() => {
    setDeviceType();
    window.addEventListener('resize', () => setDeviceType());
  }, []);

  return (
    <ReactCarousel
      autoPlay
      infiniteLoop
      emulateTouch
      autoFocus
      useKeyboardArrows
      centerMode={!isMobile}
      centerSlidePercentage={80}
      swipeable
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      showThumbs={false}
      interval={2000}
    >
      {props.children}
    </ReactCarousel>
  );
}
