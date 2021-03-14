import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { UserContext } from '../../helper/UserContext';

const Register = () => {
  const history = useHistory();
  const [, setUser] = useContext(UserContext);
  const [input, setInput] = useState({ name: '', email: '', password: '' });

  const handleSubmit = () => {
    axios
      .post('https://backendexample.sanbersy.com/api/register', {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        const user = res.data.user;
        const token = res.data.token;
        const currentUser = { name: user.name, email: user.email, token };
        setUser(currentUser);
        localStorage.setItem('userMovee', JSON.stringify(currentUser));
        history.push('/');
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleChange = (name) => (event) => {
    const { value } = event.target;

    switch (name) {
      case 'name': {
        setInput({ ...input, name: value });
        break;
      }
      case 'email': {
        setInput({ ...input, email: value });
        break;
      }
      case 'password': {
        setInput({ ...input, password: value });
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <Form name="normal_login" className="register-form" onFinish={handleSubmit}>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Full name"
          onChange={handleChange('name')}
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email address"
          onChange={handleChange('email')}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={handleChange('password')}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Agree with terms and conditions</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        Or <Link to="/login">Log In!</Link>
      </Form.Item>
    </Form>
  );
};

export default Register;
