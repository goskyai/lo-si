import { useEffect, useState } from 'react';

export const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState(false);

  const handleDown = (e: KeyboardEventInit): void => {
    if (e.key === targetKey) {
      setKeyPressed(true);
    }
  };

  const handleUp = (e: KeyboardEventInit): void => {
    if (e.key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleDown);
    document.body.addEventListener('keyup', handleUp);

    return () => {
      document.body.removeEventListener('keydown', handleDown);
      document.body.removeEventListener('keyup', handleUp);
    };
  }, []);

  return keyPressed;
};
