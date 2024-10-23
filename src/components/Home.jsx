import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Partner from "./Partner";

const Home = () => {
  return (
    <div className='bg-white min-h-screen relative'>
      <Navbar />
      <Header />
      <Partner />
    </div>
  );
}

export default Home;
