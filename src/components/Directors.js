import React from 'react';
import { directors } from '../data';

const Directors = () => {

  function generateDirectorList() {
    return directors.map(director => <div>Director: {director.name} <ul>{director.movies.join(', ')}</ul></div>)
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {generateDirectorList()}
    </div>
  );
}

export default Directors
