import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Table, Image } from "antd";

const GetSortedData = () => {
  let { sort } = useParams();
  const BASE_URL = `https://fakestoreapi.com/products`;
  const [products, setProduct] = useState([]);
  const loading = useRef(true);
  useEffect(() => {
    axios.get(`${BASE_URL}/sort=${sort}`).then((res) => {
      if (res.status === 200)
        setTimeout(() => {
          loading.current = false;
        }, 100);
      else loading.current = true;
      let product = res.data;
      console.log("data",product);
      setProduct(product);
    });
  }, []);
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
      scroll={{ 
        x: 200
      }}
      bordered={true} 
      loading={loading.current} 
      columns={columns} 
      dataSource={products} 
    />
  );
};

export default GetSortedData;
