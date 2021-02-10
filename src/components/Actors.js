import React from 'react';
import { actors } from '../data';

const Actors = () => {

  function generateActorList() {
    return actors.map(actor => <div>Actor: {actor.name} <ul>{actor.movies.join(', ')}</ul></div>)
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {generateActorList()}
    </div>
  );
};

export default Actors;
