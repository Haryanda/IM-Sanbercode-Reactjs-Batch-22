import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const fallbackImage =
  'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png';

const CardGame = ({ data }) => {
  return (
    <Card
      hoverable
      size="small"
      style={{ width: '100%', margin: '10px' }}
      cover={
        <img
          alt="example"
          src={data.image_url ? data.image_url : fallbackImage}
        />
      }
    >
      <Meta title={data.name} description={data.genre} />
    </Card>
  );
};

export default CardGame;
