import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {Table} from 'antd';
const GetCart = () => {
  const BASE_URL = `https://fakestoreapi.com/carts/`;
  const [products, setProduct] = useState([]);
  const loading = useRef(true);
  useEffect(() => {
    axios.get(`${BASE_URL}`, {
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
        // loading.current = false;
        setTimeout(() => {
          loading.current = false;
        }, 10);
      else loading.current = true;

      let data = res.data.map((data,index) => {
        let obj = data;
        obj.key=index;
        return obj;
      });
      setProduct(data);
      
    }).catch((error) => {
      loading.current = false;
      console.log("Error", error);
    });

    // // Fetch GET API
    // fetch(`${BASE_URL}`, {
    //   method: "GET",
    // })
    // .then(res => res.json())
    // .then(json => console.log(json));

    // // Fetch GET Single API
    // fetch(`${BASE_URL}${cartId}`, {
    //   method: "GET",
    // })
    // .then(res => res.json())
    // .then(json => console.log(json));

  }, [BASE_URL]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => text,
    },
    {
      title: "User ID",
      dataIndex: "userId",
      key: "uid",
      render: (text) => text,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date) => {
        const datum = new Date(date);
        let pdate = datum.getUTCDate() + 1;
        let month = datum.getUTCMonth() + 1;
        let year = datum.getUTCFullYear();
        const purchaseDate = year + '-' + month + '-' + pdate;
        return purchaseDate;
      },
    }
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
      pagination={false}

      columns={columns}
      dataSource={products}

      expandRowByClick
      expandable={{
        expandedRowRender: (record) => {
          return (
            <Table
              className="components-table-demo-nested"
              pagination={false}
              columns={[
                {
                  title: 'Product ID',
                  dataIndex: 'productId',
                  key: 'pid',
                },
                {
                  title: 'Quantity',
                  dataIndex: 'quantity',
                  key: 'qty',
                }
              ]}
              dataSource={record.products} 
            />
          );
        },
        rowExpandable: (record) => record.products,
      }}
    />
  );
};

export default GetCart