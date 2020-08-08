import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import homeModule, { initialState } from './src/modules/Home';
import Home from './src/containers/Home';

const store = createStore(homeModule, initialState)

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
};

export default App;