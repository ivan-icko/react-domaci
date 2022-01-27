import React,{useState} from 'react';
import Slika from "../tools/book.png";
import {Link} from "react-router-dom";
import "../styles/NavBar.css";
import ReorderIcon from '@mui/icons-material/Reorder';


function NavBar() {

    const [openLinks,setOpenLinks]=useState(false);
    const toggleNavbar=()=>{
            setOpenLinks(!openLinks);
    }
  return <div className='navbar'>
      <div className="leftSide" id={openLinks?"open":"close"}>
          <img src={Slika} alt="" />
          <div className='hiddenLinks'>
          <Link to="/home">Pocetna</Link>
          <Link to="menu">Meni</Link>
          <Link to="contact">Kokntakt</Link>
          </div>
      </div>
      <div className="rightSide">
          <Link to="/home">Pocetna</Link>
          <Link to="menu">Meni</Link>
          <Link to="contact">Kontakt</Link>
          <button onClick={toggleNavbar}>
              <ReorderIcon/>
          </button>
      </div>
  </div>;
}

export default NavBar;
