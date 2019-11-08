import React, { useState } from 'react';
import Artists from '../components/Artists';
import Form from '../components/Form';
import styles from './ArtistDisplay.css';
import { useArtists } from '../hooks/useArtists';
import { usePaging } from '../hooks/usePaging';


export default function ArtistDisplay() {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');
  const { 
    offset, 
    nextButton, 
    prevButton, 
    increment, 
    decrement, 
    setMax
  } = usePaging(5);
  const listOfArtists = useArtists(search, offset, setMax);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(input);
  };

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  return (
    <div className={styles.ArtistDisplay}>
      <p>Please search for your favorite musical artists</p>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        search={input}
      />
      <Artists
        artistArray={listOfArtists} />
      <button name="prev" disabled={prevButton} onClick={decrement}>Previous</button>
      <button name="next" disabled={nextButton} onClick={increment}>Next</button>
    </div>
  );

}
