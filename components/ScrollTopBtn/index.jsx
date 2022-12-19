/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useEffect, useState } from 'react';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import styles from './scrollBtn.scss';

export default function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mainHeight = document.querySelector('main').pageYOffset;
    const handleScrollBtnVisibility = () => {
      if (mainHeight > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.querySelector('main').addEventListener('scroll', handleScrollBtnVisibility);
  }, []);

  const scrollToTop = () => {
    document.querySelector('main').scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop} role="button" tabIndex={0}>
          <BsFillArrowUpCircleFill />
        </div>
      )}
    </div>
  );
}
