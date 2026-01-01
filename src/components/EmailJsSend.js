import React from 'react';
import emailjs from 'emailjs-com';

export default function EmailJsSend() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_8ri3uot', 'template_szzge3n', e.target, 'Ycm97QAUQg63XeOZ4')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    
    
    <form  onSubmit={sendEmail}>
      <input type="hidden" name="product_title" />

      <label>Your Name</label>
      <input type="text" name="from_name" />

      <label>Email</label>
      <input type="email" name="from_email" />

      <label>Contact Number</label>
      <input type="text" name="from_phone" />

      <input type="submit" value="Send" />
    </form>
  );
}