import React from 'react';
import { Tabs } from 'antd';
import GetData from './GetData';
import SortedData from './SortedData';
import SearchData from './SearchData';
import FilterdData from './FilterdData';
import PaginatedData from '../../pagination/PaginatedData';
import CartData from '../../cart';

const { TabPane } = Tabs;

const AxiosApi = () => (
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="All Product" key="all">
        <GetData />
      </TabPane>
      <TabPane tab="Pagination" key="pages">
        <PaginatedData />
      </TabPane>
      <TabPane tab="Sort" key="sort">
        <SortedData />
      </TabPane>
      <TabPane tab="Filter" key="filter">
        <FilterdData />
      </TabPane>
      <TabPane tab="Search" key="search">
        <SearchData />
      </TabPane>
      <TabPane tab="Cart" key="cart">
        <CartData />
      </TabPane>
    </Tabs>
  </div>
);

export default AxiosApi