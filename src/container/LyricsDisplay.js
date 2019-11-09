import React from 'react';
import { useLyrics } from '../hooks/useLyrics';
// import PropTypes from 'prop-types';
// import { fetchLyrics } from '../services/api-call';
import Lyrics from '../components/Lyrics';


const LyricsDisplay = () => {
  const [lyrics, name, track] = useLyrics();
  return (
    <Lyrics lyrics={lyrics}
      name={name}
      title={track} />
  );
  // const [lyrics, setLyrics] = useState('');


  // useEffect(() => {
  //   fetchLyrics(match.params.name, match.params.track)
  //     .then(res => {  
  //       setLyrics(res);
  //     });
  // });
};

// LyricsDisplay.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       track: PropTypes.string.isRequired
//     }).isRequired
//   }).isRequired
// };

export default LyricsDisplay;
