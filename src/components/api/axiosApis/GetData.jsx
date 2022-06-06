import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Image, Table } from "antd";

const GetData = () => {
  const BASE_URL = `https://fakestoreapi.com/products/`;
  const [products, setProduct] = useState([]);
  const loading = useRef(true);
  useEffect(() => {
    axios(`${BASE_URL}`,{
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json',
      },
      withCredentials: false,
      credentials: 'same-origin',
    }).then(res => {
      if (res.status === 200)
        setTimeout(() => {
          loading.current = false;
        }, 100);
      else loading.current = true;
      setProduct(res.data);
    }).catch((error)=>{
      loading.current = false;
      console.log("Error",error);
    });
  },[BASE_URL]);
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
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      responsive: ["sm"],
      render: (src) => <Image width="100%" src={src} alt={src} />,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      responsive: ["sm"],
    },
  ];
  return (
    <Table 
      style={{
        minHeight:'100vh',
      }}
      scroll={{ 
        x: 200
      }}
      border={true} 
      loading={loading.current} 
      columns={columns} 
      dataSource={products} 
      pagination={false} 
    />
  );
};

export default GetData;
