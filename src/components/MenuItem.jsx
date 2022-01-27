import React from 'react';

function MenuItem({image,name,autor,price}) {
  return <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <p>${price}</p>
        <p>{autor}</p>
  </div>;
}

export default MenuItem;
