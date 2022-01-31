import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

const Layout = ({children}) => {
  return <div className='layout-container'>
      <Navbar/>
      {children}
      {/* <Footer/> */}
  </div>;
};

export default Layout;
