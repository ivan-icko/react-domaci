import React from 'react';
import {MenuList} from "../helpers/MenuList"
import MenuItem from '../components/MenuItem';
import "../styles/Menu.css"
import { useState } from 'react';

function Menu() {
  const [searchTerm,setSearchTerm]=useState("")
  return <div className='menu'>
      <h1 className='menuTitle'>Meni</h1>
      <input type="text" placeholder='Pretrazi knjigu...' onChange={event=>{setSearchTerm(event.target.value)}}></input>
      <div className='menuList'>
      {MenuList.filter((val)=>{
        if(searchTerm==""){
          return val;
        }
        else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){return val;}
      }).map((menuItem,key)=>{
            return <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} autor={menuItem.autor}/>;
        })}
        </div>
        <p>----------------------------------------------------------</p>
      <div className="menuList">
        {MenuList.map((menuItem,key)=>{
            return <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} autor={menuItem.autor}/>;
        })}
      </div>
  </div>;
}

export default Menu;
