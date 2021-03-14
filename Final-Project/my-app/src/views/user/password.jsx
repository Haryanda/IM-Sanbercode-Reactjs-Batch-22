import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { UserContext } from '../../helper/UserContext';

const Password = () => {
  const [user] = useContext(UserContext);
  const [input, setInput] = useState({ new: '', current: '' });

  const handleSubmit = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const data = {
      current_password: input.current,
      new_password: input.new,
    };

    axios
      .post(
        'https://backendexample.sanbersy.com/api/change-password',
        data,
        config
      )
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleChange = (name) => (event) => {
    const { value } = event.target;

    switch (name) {
      case 'new': {
        setInput({ ...input, new: value });
        break;
      }
      case 'current': {
        setInput({ ...input, current: value });
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <Form
      name="forgot_password"
      className="forgot-form"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="current_password"
        rules={[
          {
            required: true,
            message: 'Please input your current password!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Current Password"
          onChange={handleChange('current')}
          value={input.email}
        />
      </Form.Item>
      <Form.Item
        name="new_password"
        rules={[
          {
            required: true,
            message: 'Please input your new password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="New Password"
          onChange={handleChange('new')}
          value={input.new}
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="forgot-form-button">
          Reset
        </Button>
        Or <Link to="/login">Log In!</Link>
      </Form.Item>
    </Form>
  );
};

export default Password;
