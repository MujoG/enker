import React, { useState } from 'react';
import { useContext } from 'react';
import { mainContext } from '../context/Cotnext';
import Brandbutton from './brandbutton';



const Otherbrands = () => {
  const mujo = useContext(mainContext)
  console.log(mujo);
  return <div className='other-container'>
      <Brandbutton/>
      <Brandbutton/>
  </div>;
};

export default Otherbrands;
