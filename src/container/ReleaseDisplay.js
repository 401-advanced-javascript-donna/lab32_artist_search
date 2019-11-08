import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchReleases } from '../services/api-call';
import Releases from '../components/Releases';
import styles from './ReleaseDisplay.css';

const ReleaseDisplay = ({ match }) => {
  const [releases, setReleases] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(true);

  useEffect(() => {
    fetchReleases(match.params.id, offset)
      .then(releases => {
        setReleases(releases[1]);
        setCount(releases[0]);
      });
  }, [offset, count]);


  const handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 6 : num = -6;
    setOffset(offset + num);
    setPrevButton(false);
    setNextButton(false);
    if(offset + 5 >= count) setNextButton(true);
    if(target.name === 'prev' && offset === 0) setPrevButton(true);
  };

  return (
    <div className={styles.ReleaseDisplay}>
      <h2>{match.params.name}</h2>
      <button name="prev" disabled={prevButton} onClick={handleClick}>Previous</button>
      <button name="next" disabled={nextButton} onClick={handleClick}>Next</button>
      <Releases releases={releases} name={match.params.name} />
    </div>

  );
};

ReleaseDisplay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ReleaseDisplay;
