import { useState, useEffect } from 'react';
import { fetchLyrics } from '../services/api-call';
import { useParams } from 'react-router-dom';

export const useLyrics = () => {
  const [lyrics, setLyrics] = useState('');

  let { name, track } = useParams();

  useEffect(() => {
    fetchLyrics(name, track)
      .then(res => setLyrics(res));
  }, []);

  return [lyrics, name, track];
};
