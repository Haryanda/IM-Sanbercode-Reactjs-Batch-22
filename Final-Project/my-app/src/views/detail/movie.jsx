import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DetailMovie = ({ match }) => {
  const [data, setData] = useState({});

  const fetchData = () => {
    const { id } = match.params;
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(fetchData, [match]);

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.image_url} alt={data.title} />
    </div>
  );
};

export default DetailMovie;
