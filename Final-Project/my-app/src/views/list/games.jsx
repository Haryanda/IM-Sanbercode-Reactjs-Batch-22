import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '../../components/grids/Grid';

const Movies = () => {
  const [games, setGames] = useState([]);

  const fetchGames = () => {
    axios
      .get('https://backendexample.sanbersy.com/api/data-game')
      .then((response) => {
        const { data } = response;
        const dataIsi = data.filter((game) => {
          return game.image_url !== null || game.name !== null;
        });
        setGames(dataIsi);
      });
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return <div>{games && <Grid title="Games" type="game" data={games} />}</div>;
};

export default Movies;
