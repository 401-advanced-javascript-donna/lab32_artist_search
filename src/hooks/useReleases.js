import { useState, useEffect } from 'react';
import { fetchReleases } from '../services/api-call';
import { useParams } from 'react-router-dom';

export const useReleases = (offset, setMax) => {
  const [releases, setReleases] = useState([]);
  const { name, id } = useParams();
  
  useEffect(() => {
    fetchReleases(id, offset)
      .then(releases => {
        setReleases(releases[1]);
        setMax(releases[0]);
      });
  }, [offset]);

  return [releases, name];
};
