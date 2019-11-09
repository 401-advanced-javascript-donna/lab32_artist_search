import { useState } from 'react';

export const usePaging = (perPage) => {
  const [offset, setOffset] = useState(0);
  const [max, setMax] = useState(0);

  const increment = () => {
    setOffset(offset + perPage);
  };

  const decrement = () => {
    setOffset(Math.max(1, offset - perPage));
  };

  return { 
    offset,
    setMax, 
    decrement,
    increment,
    nextButton: offset + perPage >= max,
    prevButton: offset === 0
  };
};
