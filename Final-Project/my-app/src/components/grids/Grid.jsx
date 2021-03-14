import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { CardGame, CardMovie } from '../cards/';

const Grid = ({ data, type, title }) => {
  return (
    <>
      <h2>
        <Link to={`/${title.toLowerCase()}`}>{title}</Link>
      </h2>
      <Row gutter={16}>
        {data.map((item) => (
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }} key={item.id}>
            <Link to={`/${type}/${item.id}`}>
              {type === 'movie' ? (
                <CardMovie data={item} />
              ) : (
                <CardGame data={item} />
              )}
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Grid;
