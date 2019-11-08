import React, { useState, useEffect } from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import { fetchArtist } from '../services/api-call';
import styles from './ArtistDisplay.css';

const ArtistDisplay = () => {
  const [search, setSearch] = useState('');
  const [artistName, setArtistName] = useState('');
  const [listOfArtists, setListOfArtists] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [nextButton, setNextButton] = useState(false);
  const [prevButton, setPrevButton] = useState(true);


  useEffect(() => {
    if(!search) return;
    fetchArtist(search, offset)
      .then(artists => {
        setListOfArtists(artists[1]);
        setCount(artists[0]);
      });
  }, [offset, artistName]);

  useEffect(() => {
    if(offset + 5 >= count) {
      setNextButton(true);
    }
    if(offset === 0) {
      setPrevButton(true);
    }
  }, [offset]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOffset(0);
    setPrevButton(true);
    setNextButton(false);
    setArtistName(search);
  };


  const handleChange = ({ target }) => {
    setSearch(target.value);

  };


  const handleClick = ({ target }) => {
    let num;
    target.name === 'next' ? num = 5 : num = -5;

    setOffset(offset + num);
    setPrevButton(false);
    setNextButton(false);

  };


  return (
    <div className={styles.ArtistDisplay}>
      <p>Please search for your favorite musical artists</p>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        search={search}
      />
      <Artists
        artistArray={listOfArtists} />
      <button name="prev" disabled={prevButton} onClick={handleClick}>Previous</button>
      <button name="next" disabled={nextButton} onClick={handleClick}>Next</button>
    </div>
  );
};

export default ArtistDisplay;
