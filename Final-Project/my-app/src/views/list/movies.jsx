import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '../../components/grids/Grid';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get('https://backendexample.sanbersy.com/api/data-movie')
      .then((response) => {
        const { data } = response;
        const dataIsi = data.filter((movie) => {
          return movie.image_url !== null || movie.name !== null;
        });
        setMovies(dataIsi);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>{movies && <Grid title="Movies" type="movie" data={movies} />}</div>
  );
};

export default Movies;
