import { useEffect, useRef, useState } from 'react';

export interface WindowSize {
  width: number;
  height: number;
}

export const useWindowSize = (): WindowSize => {
  const timeout = useRef<number>();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    if (timeout.current) clearTimeout(timeout.current);

    timeout.current = window.setTimeout(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 500);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
