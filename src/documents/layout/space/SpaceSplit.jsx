import React from 'react';
import { Space, Typography, Divider } from 'antd';

const SpaceSplit = () => (
  <Space split={<Divider type="vertical" />}>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
    <Typography.Link>Link</Typography.Link>
  </Space>
);

export default SpaceSplit;