import { useState, useEffect } from 'react';
import { fetchArtist } from '../services/api-call';

export const useArtists = (search, offset, setMax) => {
  const [listOfArtists, setListOfArtists] = useState([]);

  useEffect(() => {
    if(!search) return;
    fetchArtist(search, offset)
      .then(artists => {
        setListOfArtists(artists[1]);
        setMax(artists[0]);
      });
  }, [offset, search]);

  return listOfArtists;
};
