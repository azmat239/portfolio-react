import React from 'react';
import './header.css';
import Cta from './Cta';
import Me from '../../assets/me.png'
import Headersocial from './Headersocial';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h2>Azmat Ahmad Wani</h2>
        <h5 className='text-light'>Software Developer</h5>
        
        <Cta/>
        
        <Headersocial />
        <div className="Me">
          <img src={Me} alt="no" />
        </div>

        <a href="#contact" className='ScrollBar'>ScrollBar</a>

      </div>
    </header>
  )
}

export default Header;