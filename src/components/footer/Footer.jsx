import React from 'react'
import './footer.css';
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      
      <a href="https:://snnj" className='logo'>Azmat Ahmad Wani</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#testimony">Testimonial</a></li>
      </ul>

      <div className="social__links">
        <a href="https:://www.facebook.com">
          <BsFacebook className='footer__icon'/>
        </a>

        <a href="https:://www.instagram.com">
          <BsInstagram className='footer__icon'/>
        </a>

        <a href="https:://www.twiter.com">
          <BsTwitter className='footer__icon'/>
        </a>

      </div>
        <div className="footer__copyright">
          <small>&copy; All Copyrights Are Reserved</small>
        </div>

    </footer>
  )
}

export default Footer
