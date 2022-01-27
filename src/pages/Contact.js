import React from 'react';
import KnjigaContact from "../tools/knjigaContact.webp"
import "../styles/Contact.css"

function Contact() {
  return <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${KnjigaContact})`}}></div>
      <div className='rightSide'>
          <h1>Kontaktirajte nas</h1>
          <form id="contact-form" method='POST'>
              <label htmlFor='name'>Ime</label>
              <input name="name" placeholder='Unesite ime' type="text"></input>
              <label htmlFor='email'>Email</label>
              <input name="email" placeholder='Unesite email' type="email"></input>
              <label htmlFor='message'>Poruka</label>
              <textarea rows="5" placeholder="Unesite poruku" name="message" required></textarea>
              <button type='submit'>Posalji poruku</button>
          </form>
        </div>
  </div>;
}

export default Contact;
