import React from 'react';
import KnjigaContact from "../tools/knjigaContact.webp"
import "../styles/Contact.css"
import emailjs from "emailjs-com"

function Contact() {

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("service_qxexzjs","template_9enyowp",e.target,"user_oyCFMGrGEjyN1GVcYV19v").then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
        alert("Poruka je poslata!");
    }



  return <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${KnjigaContact})`}}></div>
      <div className='rightSide'>
          <h1>Kontaktirajte nas</h1>
          <form id="contact-form" method='POST' onSubmit={sendEmail}>

              <label htmlFor='name'>Ime</label>
              <input name="name" placeholder='Unesite ime' type="text" required></input>

              <label htmlFor='email'>Email</label>
              <input name="email" placeholder='Unesite email' type="email" required></input>
             
              <label htmlFor='message'>Poruka</label>
              <textarea rows="5" placeholder="Unesite poruku" name="message" required></textarea>
        
              <button type='submit'>Posalji poruku</button>
          </form>
        </div>
  </div>;
}

export default Contact;
