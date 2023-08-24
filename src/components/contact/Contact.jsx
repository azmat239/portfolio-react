import './contact.css';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {LiaWhatsapp} from 'react-icons/lia';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8ftigv5', 'template_xd97b3l', form.current, 'user_25JLm6rvJAkRscB2q')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };
  
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <article className="contact__option">
              <MdEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>azmat239@gmail.com</h5>
              <a href="mailto:azmat239@gmail.com" target='__blank'>Send me a message</a>
          </article>

          <article className="contact__option">
              <BsMessenger className='contact__option-icon' />
              <h4>Messenger</h4>
              <h5>Azmat Ahmad Wani</h5>
              <a href="https://m.me/azmat239" target='__blank'>Send me a message</a>
          </article>

          <article className="contact__option">
              <LiaWhatsapp className='contact__option-icon' />
              <h4>Whatsapp</h4>
              <h5>+91 7006305670</h5>
              <a href="https://api.whatsapp.com/send?phone+91 7006305670" target='__blank'>Send me a message</a>
          </article>
        </div>


        <form ref={form} action={sendEmail}>
          <input type="text" name='name' placeholder='Enter Your Full Name' required />
          <input type="email" name="email" placeholder='Enter your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'    required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
