import React from 'react';
import './App.css';

import Header from './pages/Header';
import MainContainer from './Component/MainContainer';
import Alert from './Component/Alert';




function App() {
  return (
    <>
      <Alert />
      <Header />
      <MainContainer />
    </>
  );
}

export default App;
