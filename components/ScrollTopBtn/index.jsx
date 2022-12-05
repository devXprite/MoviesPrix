'use client';

import { useEffect, useState } from 'react';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import styles from './scrollBtn.scss';

export default function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScrollBtnVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScrollBtnVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollBtnVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <BsFillArrowUpCircleFill />
        </div>
      )}
    </>
  );
}
