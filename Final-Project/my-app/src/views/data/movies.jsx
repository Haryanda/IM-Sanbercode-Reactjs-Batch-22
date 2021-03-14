import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const DataTable = () => {
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

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.genre.localeCompare(b.genre),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Release',
      dataIndex: 'release',
      filters: [
        {
          text: '2015',
          value: '2015',
        },
        {
          text: '2018',
          value: '2018',
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.release.indexOf(value) === 0,
      sorter: (a, b) => parseInt(a.release, 10) - parseInt(b.release, 10),
      sortDirections: ['descend', 'ascend'],
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return <Table columns={columns} dataSource={games} onChange={onChange} />;
};

export default DataTable;
