import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchLyrics } from '../services/api-call';
import Lyrics from '../components/Lyrics';


const LyricsDisplay = ({ match }) => {
  const [lyrics, setLyrics] = useState('');


  useEffect(() => {
    fetchLyrics(match.params.name, match.params.track)
      .then(res => {  
        setLyrics(res);
      });
  });
  
  return (
    <Lyrics lyrics={lyrics}
      name={match.params.name}
      title={match.params.track} />
  );
};

LyricsDisplay.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
      track: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default LyricsDisplay;
