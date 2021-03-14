import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '../components/grids/Grid';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [games, setGames] = useState([]);

  const fetchGames = () => {
    axios
      .get('https://backendexample.sanbersy.com/api/data-game')
      .then((response) => {
        const { data } = response;
        const dataIsi = data.filter((game) => {
          return game.image_url !== null || game.name !== null;
        });
        setGames(dataIsi.slice(0, 4));
      });
  };

  const fetchMovies = () => {
    axios
      .get('https://backendexample.sanbersy.com/api/data-movie')
      .then((response) => {
        const { data } = response;
        const dataIsi = data.filter((movie) => {
          return movie.image_url !== null || movie.name !== null;
        });
        setMovies(dataIsi.slice(0, 4));
      });
  };

  useEffect(() => {
    fetchGames();
    fetchMovies();
  }, []);

  return (
    <div>
      {games && <Grid title="Games" type="game" data={games} />}
      {movies && <Grid title="Movies" type="movie" data={movies} />}
    </div>
  );
};

export default Home;
