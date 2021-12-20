import { useCallback } from 'react';

export const useCopy = (text: string): (() => void) => {
  return useCallback(() => {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-2vw';
    document.body.appendChild(el);
    const selection = document.getSelection();

    if (selection) {
      const selected =
        selection.rangeCount > 0 ? selection.getRangeAt(0) : false;
      el.select();

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
      } else {
        document.execCommand('copy');
      }
      document.body.removeChild(el);

      if (selected) {
        selection.removeAllRanges();
        selection.addRange(selected);
      }
    }
  }, [text]);
};
