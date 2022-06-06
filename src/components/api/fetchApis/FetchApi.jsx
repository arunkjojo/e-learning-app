import React from 'react';
import { Tabs } from 'antd';
import GetAllData from './GetAllData';
import GetSingleData from './GetSingleData';
import GetLimitedData from './GetLimitedData';
import GetSortedData from './GetSortedData';

const FetchApi = () => {
  return (
    <Tabs type="card">
      <Tabs.TabPane tab="All Product" key="all">
        <GetAllData />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Single Product" key="single">
        <GetSingleData />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Limited Product" key="lim">
        <GetLimitedData />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Sort Product" key="sort">
        <GetSortedData />
      </Tabs.TabPane>
    </Tabs>
  )
}

export default FetchApi