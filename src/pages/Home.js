import React from 'react';
import {Link} from "react-router-dom"
import BookImage from '../tools/book1.jpg'
import '../styles/Home.css'

function Home() {
  return <div className='home' style={{backgroundImage:`url(${BookImage})`}}>
      <div className='headerContainer' >
          <h1>Knjiga razbibriga</h1>
          <p>KNJIGA ZA SVAKOGA</p>
          <Link to="/menu"><button>NARUCI</button></Link>
      </div>
  </div>;
}

export default Home;
