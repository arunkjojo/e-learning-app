import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Alert, Spin } from 'antd';
const RemoveCart = () => {
  const BASE_URL = `https://fakestoreapi.com/carts`;
  const [notification, setNotification] = useState({
    title: null,
    message: null,
    types: null
  });
  const loading = useRef(true);
  const cartId = 2;
  useEffect(() => {
    setNotification({
      title: null,
      message: null,
      types: null
    });
    axios(`${BASE_URL}/${cartId}`, {
      method: 'DELETE',
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
          message: "Successfully deleted cart item, Cart ID: " + res.data.id,
          types: 'success'
        });
        setTimeout(() => {
          loading.current = false;
        }, 10);
      } else {
        loading.current = true;
        setNotification({
          title: 'Error',
          message: "Sorry, I can't remove this cart item, Cart ID: "+cartId,
          types: 'error'
        });
      }

    }).catch((error) => {
      loading.current = false;
      setNotification({
        title: 'Error',
        message: "Sorry, I can't remove this cart item, Cart ID: "+cartId,
        types: 'error'
      });
    });

    // // Fetch DELETE API
    // fetch(`${BASE_URL}/${cartId}`, {
    //   method: "DELETE",
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
        : <Spin tip="Loading Removing..." />}
    </div>
  );
};

export default RemoveCart