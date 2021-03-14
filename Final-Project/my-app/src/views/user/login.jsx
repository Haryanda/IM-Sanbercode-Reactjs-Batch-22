import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { UserContext } from '../../helper/UserContext';

const Login = () => {
  const history = useHistory();
  const [, setUser] = useContext(UserContext);
  const [input, setInput] = useState({ email: '', password: '' });

  const handleSubmit = () => {
    axios
      .post('https://backendexample.sanbersy.com/api/user-login', {
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
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email address"
          onChange={handleChange('email')}
          value={input.email}
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
          value={input.password}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link className="login-form-forgot" to="/forgot">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
  );
};

export default Login;
