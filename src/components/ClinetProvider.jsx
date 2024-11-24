'use client'; // This ensures it's a client-side component

import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';

const ClientProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ClientProvider;
