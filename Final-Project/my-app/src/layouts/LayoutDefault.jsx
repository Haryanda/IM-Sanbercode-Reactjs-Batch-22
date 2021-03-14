import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { PlayCircleOutlined, RocketOutlined } from '@ant-design/icons';
import { UserContext } from '../helper/UserContext';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const LayoutDefault = ({ children }) => {
  const [user, setUser] = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('userMovee');
    setUser(null);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          <Link to="/">Movee</Link>
        </div>

        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            {user ? (
              <Link to="/password">{user.name}</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </Menu.Item>
          {user && (
            <Menu.Item key="3" onClick={handleLogout}>
              Logout
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout
          className="site-layout-background"
          style={{ padding: '24px 0' }}
        >
          {user && (
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultOpenKeys={['games']}
                style={{ height: '100%' }}
              >
                <SubMenu key="games" icon={<RocketOutlined />} title="Games">
                  <Menu.Item key="game-create">
                    <Link to="/game/create">Create Game</Link>
                  </Menu.Item>
                  <Menu.Item key="game-list">
                    <Link to="/data/games">List Games</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="movies"
                  icon={<PlayCircleOutlined />}
                  title="Movies"
                >
                  <Menu.Item key="movies-create">
                    <Link to="/movie/create">Create Movie</Link>
                  </Menu.Item>
                  <Menu.Item key="movies-list">
                    <Link to="/data/movies">List Movies</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          )}

          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Harry Design &copy; 2021 Created by Harry Haryanda
      </Footer>
    </Layout>
  );
};

export default LayoutDefault;
