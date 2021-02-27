import React from 'react';
import Home from './home';

const MainPage = () => {
  console.log(process.env.CONTACT_GMAIL_USER);
  console.log(process.env.CONTACT_GMAIL_PASSWORD);
  console.log(process.env.RECEIPIENT_MAIL);
  return (
    <Home/>
  );
};

export default MainPage;
