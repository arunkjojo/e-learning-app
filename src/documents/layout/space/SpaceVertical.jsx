import React from 'react';
import { Space, Card } from 'antd';

const SpaceVertical = () => (
  <Space
    direction="vertical"
    size="middle"
    style={{
      display: 'flex',
    }}
  >
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    <Card title="Card" size="small">
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </Space>
);

export default SpaceVertical;