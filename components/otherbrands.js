import React, { useState } from 'react';
import { useContext } from 'react';
import { mainContext } from '../context/Cotnext';
import Brandbutton from './brandbutton';



const Otherbrands = () => {
  const plug = useContext(mainContext)
  // useEffect(() => {
  //   console.log(plug.oznaka +'mujo');
  // },[plug])
 if(plug.oznaka != undefined){
  return <div className='other-container'>
  {plug.bosches.data.length>0 ? <Brandbutton name = {'BOSCH'} data = {plug.bosches.data}/> : ''}
  {plug.ngks.data.length>0 ? <Brandbutton name = {'NGK'} data = {plug.ngks.data}/> : ''}
  {plug.champions.data.length>0 ? <Brandbutton name = {'CHAMPION'} data = {plug.champions.data}/> : ''}
  {plug.densos.data.length>0 ? <Brandbutton name = {'DENSO'} data = {plug.densos.data}/> : ''}
  {plug.berus.data.length>0 ? <Brandbutton name = {'BERU'} data = {plug.berus.data}/> : ''}
  {plug.brisks.data.length>0 ? <Brandbutton name = {'BRISK'} data = {plug.brisks.data}/> : ''}
</div>;
 }
 else{
   return <div>
     
   </div>
 }
};

export default Otherbrands;
