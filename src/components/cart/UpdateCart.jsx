import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Alert, Spin } from 'antd';

const UpdateCart = () => {
  const BASE_URL = `https://fakestoreapi.com/carts`;
  const [notification, setNotification] = useState({
    title: null,
    message: null,
    types: null
  });
  const loading = useRef(true);
  const cartId=2;
  const updateCartData = {
    userId: 5,
    date: new Date('2022-06-24'),
    products: [
      { productId: 3, quantity: 2 },
      { productId: 1, quantity: 3 },
      { productId: 2, quantity: 1 }
    ]
  }
  useEffect(() => {

    setNotification({
      title: null,
      message: null,
      types: null
    });

    axios(`${BASE_URL}/${cartId}`, {
      method: 'PUT',
      body: JSON.stringify(updateCartData),
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
          message: "Successfully update cart item, Cart ID: " + res.data.id,
          types: 'success'
        });
        setTimeout(() => {
          loading.current = false;
        }, 10);
      } else {
        loading.current = true;
        setNotification({
          title: 'Error',
          message: "Sorry, I can't update cart item",
          types: 'error'
        });
      }

    }).catch((error) => {
      setNotification({
        title: 'Error',
        message: "Sorry, I can't update cart item",
        types: 'error'
      });
    });

    // // Fetch PUT/PATCH API
    // fetch(`${BASE_URL}/${cartId}`, {
    //   method: "PUT/PATCH",
    // })
    // .then(res => res.json())
    // .then(json => console.log(json));

  }, [BASE_URL, cartId]);
  return (
    <div style={{
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      {!loading.current && notification.message !== null ?
        <Alert message={notification.title} description={notification.message} type={notification.types} />
        : <Spin tip="Loading Update..." />}
    </div>
  );
};
export default UpdateCart