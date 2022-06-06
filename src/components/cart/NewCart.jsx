import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Alert, Spin } from 'antd';
const NewCart = () => {
  const BASE_URL = `https://fakestoreapi.com/carts/`;
  const [notification, setNotification] = useState({
    title: null,
    message: null,
    types: null
  });
  const loading = useRef(true);
  const newCartData = {
    userId: 2,
    date: new Date('2022-06-15'),
    products: [
      { productId: 5, quantity: 1 },
      { productId: 1, quantity: 5 }
    ]
  }
  useEffect(() => {

    setNotification({
      title: null,
      message: null,
      types: null
    });
    
    axios(`${BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify(newCartData),
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Content-Type': 'application/json',
      },
      withCredentials: false,
      credentials: 'same-origin',
    }).then(res => {
      if (res.status === 200) {
        setNotification({
          title: 'Succes',
          message: "Successfully added new cart item, Cart ID: " + res.data.id,
          types: 'success'
        });
        setTimeout(() => {
          loading.current = false;
        }, 10);
      } else {
        loading.current = true;
        setNotification({
          title: 'Error',
          message: "Sorry, I can't add new cart item",
          types: 'error'
        });
      }
    }).catch((error) => {
      loading.current = false;
      setNotification({
        title: 'Error',
        message: "Sorry, I can't add new cart item",
        types: 'error'
      });
    });

    // // Fetch POST API
    // fetch(`${BASE_URL}`, {
    //   method: "POST",
    //   body: JSON.stringify(newCartData)
    // })
    // .then(res => res.json())
    // .then(json => console.log(json));

  }, [BASE_URL]);
  return (
    <div style={{
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      {!loading.current && notification.message !== null ?
        <Alert message={notification.title} description={notification.message} type={notification.types} />
        : <Spin tip="Loading Create..." />}
    </div>
  );
};

export default NewCart