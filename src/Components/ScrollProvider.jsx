'use client'; // Only needed in app directory setup

import { useRef, useEffect, useState } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const ScrollProvider = ({ children }) => {
  const containerRef = useRef(null);
  const [scrollInstance, setScrollInstance] = useState(null);

  useEffect(() => {
    let scroll;

    // Only run in the browser
    if (typeof window !== 'undefined') {
      import('locomotive-scroll').then((LocomotiveScroll) => {
        scroll = new LocomotiveScroll.default({
          el: containerRef.current,
          smooth: true,
          lerp: 0.07,
        });

        setScrollInstance(scroll);
      });
    }

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollProvider;
