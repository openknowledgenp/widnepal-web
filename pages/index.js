import React from 'react';
import Home from './home';

const MainPage = () => {
  console.log('process.env.NODE_ENV');
  console.log(process.env.NODE_ENV);
  return (
    <Home/>
  );
};

export default MainPage;
