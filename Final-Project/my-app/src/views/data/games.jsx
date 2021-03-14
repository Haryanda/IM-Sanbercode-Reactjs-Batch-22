import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Space, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import { UserContext } from '../../helper/UserContext';

const DataTable = () => {
  const history = useHistory();
  const [games, setGames] = useState([]);
  const [user] = useContext(UserContext);

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

  const deleteRecord = (game) => (event) => {
    event.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    if (window.confirm(`Are your sure to delete ${game.name}`)) {
      axios
        .delete(
          `https://backendexample.sanbersy.com/api/data-game/${game.id}`,
          config
        )
        .then((res) => {
          alert(`${game.name} deleted!`);
          fetchGames();
        });
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const getYears = () => {
    const years = [];
    const currentYear = new Date().getFullYear();
    let year = 2000;
    while (year <= currentYear) {
      years.push({
        text: year.toString(),
        value: year.toString(),
      });
      year += 1;
    }
    return years;
  };

  const columns = [
    {
      title: 'Cover',
      dataIndex: 'image_url',
      key: 'image_url',
      render: (text, record, index) => (
        <img
          src={text}
          alt={record.name}
          style={{ width: '4rem', objectFit: 'contain' }}
        />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Release',
      dataIndex: 'release',
      key: 'release',
      filters: getYears(),
      filterMultiple: false,
      onFilter: (value, record) => record.release.indexOf(value) === 0,
      sorter: (a, b) => parseInt(a.release, 10) - parseInt(b.release, 10),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Single Player',
      dataIndex: 'singlePlayer',
      key: 'singlePlayer',
      sorter: (a, b) => a.singlePlayer - b.singlePlayer,
      sortDirections: ['descend', 'ascend'],
      render: (record) => <>{record === 1 ? 'Yes' : 'No'}</>,
    },
    {
      title: 'Multi Player',
      dataIndex: 'multiplayer',
      key: 'multiplayer',
      sorter: (a, b) => a.multiplayer - b.multiplayer,
      sortDirections: ['descend', 'ascend'],
      render: (record) => <>{record === 1 ? 'Yes' : 'No'}</>,
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.genre.localeCompare(b.genre),
      sortDirections: ['descend', 'ascend'],
    },

    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            primary
            icon={<EditOutlined />}
            onClick={() => history.push(`/game/edit/${record.id}`)}
          >
            Edit
          </Button>

          <Button type="secondary" danger onClick={deleteRecord(record)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={games}
      rowKey="id"
      onChange={onChange}
    />
  );
};

export default DataTable;
