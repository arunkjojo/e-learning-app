import React from 'react'
import { Table } from 'antd';

const FilterdData = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => text,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text) => text,
    },
    {
      title: "Product",
      dataIndex: "title",
      key: "product",
      responsive: ["sm"],
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      responsive: ["sm"],
    },
    // {
    //   title: "Image",
    //   dataIndex: "image",
    //   key: "image",
    //   responsive: ["sm"],
    //   render: (src) => <Image width="100%" src={src} alt={src} />,
    // },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      responsive: ["sm"],
    },
    {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Category 2',
          value: 'Category 2',
        },
      ],
      filterMode: 'tree',
      filterSearch: false,
      onFilter: (value, record) => record.name.includes(value),
    },
    {
      title: 'Age',
      dataIndex: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',

    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];


  return (
    <Table
      style={{
        minHeight: '100vh',
      }}
      scroll={{
        x: 200
      }}
      border={true}
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
};

export default FilterdData