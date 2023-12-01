import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as S from "./contato.style"

export default function Contato () {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4zm4zje', 'template_yxxw2bg', form.current, 'w4cbMZFDE67I17gV5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <S.Formulario>
        <div>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    </S.Formulario>
  )
}
