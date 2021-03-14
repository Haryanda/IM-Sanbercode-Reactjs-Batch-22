import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Card,
} from 'antd';
import axios from 'axios';
import { UserContext } from '../../helper/UserContext';
const { Title } = Typography;

const FormGame = (props) => {
  const history = useHistory();
  const match = useRouteMatch();
  const { id } = match.params;
  const { edit } = props;
  const [user] = useContext(UserContext);
  const [data, setData] = useState({
    name: '',
    genre: '',
    singlePlayer: '',
    multiplayer: '',
    platform: '',
    release: '',
    image_url: '',
  });

  const fetchData = () => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
      .then((response) => {
        setData(response.data);
      });
  };

  const handleChange = (name) => (event) => {
    const { value, checked } = event.target;

    if (name === 'singlePlayer' || name === 'multiplayer') {
      setData({ ...data, [name]: checked ? 1 : 0 });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const generateData = () => {
    return {
      name: data.name,
      genre: data.genre,
      singlePlayer: data.singlePlayer,
      multiplayer: data.multiplayer,
      platform: data.platform,
      release: data.release,
      image_url: data.image_url,
    };
  };

  const updateData = (data, config) => {
    axios
      .put(
        `https://backendexample.sanbersy.com/api/data-game/${id}`,
        data,
        config
      )
      .then((res) => {
        alert('Update success');
        history.push('/data/games');
      })
      .catch((err) => {
        alert(err);
      });
  };

  const createData = (data, config) => {
    axios
      .post('https://backendexample.sanbersy.com/api/data-game', data, config)
      .then((res) => {
        alert('Create success');
        history.push('/data/games');
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleSubmit = () => {
    const data = generateData();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    if (edit) {
      updateData(data, config);
    } else {
      createData(data, config);
    }
  };

  useEffect(() => {
    if (edit) {
      fetchData();
    } else {
      setData({
        name: '',
        genre: '',
        singlePlayer: '',
        multiplayer: '',
        platform: '',
        release: '',
        image_url: '',
      });
    }
  }, []);

  return (
    <Card>
      <Title>{edit ? 'Edit Game' : 'Create Game'}</Title>

      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 24 }}
        layout="vertical"
        size="large"
        onFinish={handleSubmit}
      >
        <Form.Item label="Name">
          <Input value={data.name} onChange={handleChange('name')} />
        </Form.Item>

        <Form.Item label="Genre">
          <Input value={data.genre} onChange={handleChange('genre')} />
        </Form.Item>

        <Form.Item label="Year">
          <Input value={data.release} onChange={handleChange('release')} />
        </Form.Item>

        <Form.Item label="Platform">
          <Input value={data.platform} onChange={handleChange('platform')} />
        </Form.Item>

        <Form.Item label="Play Mode">
          <Row>
            <Col span={8}>
              <Checkbox
                checked={data.singlePlayer}
                onChange={handleChange('singlePlayer')}
              >
                Single Player
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                checked={data.multiplayer}
                onChange={handleChange('multiplayer')}
              >
                Multi Player
              </Checkbox>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item label="Image">
          <Input value={data.image_url} onChange={handleChange('image_url')} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="submit-form-button"
          >
            {edit ? 'Update' : 'Submit'}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default FormGame;
