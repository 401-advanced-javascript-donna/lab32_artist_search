import React from 'react';
import Releases from '../components/Releases';
import styles from './ReleaseDisplay.css';
import { usePaging } from '../hooks/usePaging';
import { useReleases } from '../hooks/useReleases';

const ReleaseDisplay = () => {
  const { 
    offset, 
    setMax, 
    nextButton, 
    prevButton, 
    increment, 
    decrement
  } = usePaging();

  const [releases, name] = useReleases(offset, setMax);

  return (
    <div className={styles.ReleaseDisplay}>
      <h2>{name}</h2>
      <button name="prev" disabled={prevButton} onClick={decrement}>Previous</button>
      <button name="next" disabled={nextButton} onClick={increment}>Next</button>
      <Releases releases={releases} name={name} />
    </div>

  );
};

export default ReleaseDisplay;
