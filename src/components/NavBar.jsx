import React,{useState} from 'react';
import Slika from "../tools/book.png";
import {Link} from "react-router-dom";
import "../styles/NavBar.css";
import ReorderIcon from '@mui/icons-material/Reorder';


function NavBar() {

    const [openLinks,setOpenLinks]=useState(false);
    
  return <div className='navbar'>
      <div className="leftSide" id={openLinks?"open":"close"}>
          <img src={Slika} alt="" />
          <div className='hiddenLinks'>
          <Link to="/home">Home</Link>
          <Link to="menu">Menu</Link>
          <Link to="about">About</Link>
          <Link to="contact">COntact</Link>
          </div>
      </div>
      <div className="rightSide">
          <Link to="/home">Home</Link>
          <Link to="menu">Menu</Link>
          <Link to="about">About</Link>
          <Link to="contact">COntact</Link>
          <button>
              <ReorderIcon/>
          </button>
      </div>
  </div>;
}

export default NavBar;
