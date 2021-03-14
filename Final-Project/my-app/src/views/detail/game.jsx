import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DetailGame = ({ match }) => {
  const [data, setGame] = useState({});

  const fetchData = () => {
    const { id } = match.params;
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
      .then((response) => {
        setGame(response.data);
      });
  };

  useEffect(fetchData, [match]);

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image_url} alt={data.name} />
    </div>
  );
};

export default DetailGame;
