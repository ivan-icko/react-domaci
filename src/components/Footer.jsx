import React from 'react';
//import InstagramIcon from "@material-ui/icons/Instagram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YoutubeIcon from "@mui/icons-material/YouTube";
import "../styles/Footer.css"

function Footer() {
  return <div className='footer'> 
    <div className='socialMedia'>
      <InstagramIcon/> <TwitterIcon/> <FacebookIcon/> <YoutubeIcon/>
    </div>
    <p>&copy; 2022 ickovaknjiga.com</p>
   </div>;
}

export default Footer;
