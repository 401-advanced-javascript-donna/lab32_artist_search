import React from 'react';
import Tracks from '../components/Tracks';
import { useTracks } from '../hooks/useTracks';

const TrackDisplay = () => {
  const [tracks, name] = useTracks();

  return (
    <div>
      <Tracks songs={tracks} name={name}/>
    </div>
  );
};

export default TrackDisplay;
