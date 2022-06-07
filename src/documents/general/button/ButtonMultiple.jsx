import React from 'react'
import { Button, Menu, Dropdown } from 'antd';

const onMenuClick = (e) => {
  console.log('click', e);
};

const menu = (
  <Menu
    onClick={onMenuClick}
    items={[
      {
        key: '1',
        label: '1st item',
      },
      {
        key: '2',
        label: '2nd item',
      },
      {
        key: '3',
        label: '3rd item',
      },
    ]}
  />
);

const ButtonMultiple = () => {

  return (
    <>
      <Button type="primary">primary</Button>
      <Button>secondary</Button>
      <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
    </>
  )
}

export default ButtonMultiple