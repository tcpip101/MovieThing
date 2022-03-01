import React from 'react';

const Header =(props)=> {
  return (
    <div className='col-4 navbar'>
        <h3>{props.header}</h3>
    </div>
  ) 
}

export default Header;
