import { RefObject, useEffect, useState } from 'react';

export interface OptionProps {
  onContain?: () => void;
  onNotContain?: () => void;
  initValue?: boolean;
}

export const useClickContains = (
  detectAreaRef: RefObject<HTMLElement>,
  opt: OptionProps = {
    onContain: () => void 0,
    onNotContain: () => void 0,
    initValue: false,
  },
): boolean => {
  const { onContain, onNotContain, initValue } = opt;
  const [isContain, setIsContain] = useState(!!initValue);

  useEffect(() => {
    const detectClickContains = (e: Event) => {
      if (detectAreaRef.current?.contains(e.target as Node)) {
        setIsContain(true);
        if (onContain) onContain();
      } else {
        setIsContain(false);
        if (onNotContain) onNotContain();
      }
    };
    window.addEventListener('mousedown', detectClickContains);
    return () => window.removeEventListener('mousedown', detectClickContains);
  }, []);

  return isContain;
};
