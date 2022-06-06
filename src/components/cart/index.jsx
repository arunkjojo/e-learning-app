import React from 'react'
import { Tabs } from 'antd';
import GetCart from './GetCart';
import NewCart from './NewCart';
import UpdateCart from './UpdateCart';
import RemoveCart from './RemoveCart';

const CartData = () => {
  return (
    <Tabs type="card">
      <Tabs.TabPane tab="Get Cart" key="get">
        <GetCart />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Add Cart" key="post">
        <NewCart />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Update Cart" key="put">
        <UpdateCart />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Remove Cart" key="delete">
        <RemoveCart />
      </Tabs.TabPane>
    </Tabs>
  )
}

export default CartData