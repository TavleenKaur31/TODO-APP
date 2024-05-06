import React, { useEffect } from 'react';
import MainDrawer from './MainDrawer';
import { Link } from 'react-router-dom';

const Heder = () => {

  useEffect(()=>{
    document.title="Home";
  },[]);


  return (
    <div className='home'>

    <div className='header'>
      <h1 className='h'>Welcome</h1>

      <h2 className='hh'>TO-DO List</h2>
   <div style={{textAlign : 'center'}}>

      <h4>Starting Adding Your Details Here 👇🏻</h4>
     <Link to={"/add"}> <button className='btn btn-success'>Add TODO</button></Link>

   </div>
     
    </div>
    </div>
  );
}

export default Heder;
