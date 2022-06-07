import React from 'react';
import { Space, Button } from 'antd';

const SpaceWrap = () => (
  <Space size={[8, 16]} wrap>
    {new Array(20).fill(null).map(
      (
        _,
        index, // eslint-disable-next-line react/no-array-index-key
      ) => (
        <Button key={index}>Button</Button>
      ),
    )}
  </Space>
);

export default SpaceWrap;