import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Image, Table } from "antd";

const GetLimitedData = () => {
  let { limit } = useParams();
  const BASE_URL = `https://fakestoreapi.com/products`;
  const [products, setProduct] = useState([
    {
      id: "",
      category: "",
      title: "",
      description: "",
      image: "",
      price: "",
    },
  ]);
  const loading = useRef(true);
  useEffect(() => {
    fetch(`${BASE_URL}/limit=${limit}`)
      .then(res => {
        if (res.status === 200)
          setTimeout(() => {
            loading.current = false;
          }, 100);
        else loading.current = true;
        return res.json();
      })
      .then(date => {
        setProduct(date);
      });
  }, [BASE_URL, limit]);
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
        minHeight: '100vh',
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

export default GetLimitedData;
