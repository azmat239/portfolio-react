import React from 'react';
import './about.css';
import Me from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi';
import {BsFolder} from 'react-icons/bs';


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about-me">
          <img src={Me} alt="Not Availabe" className='about-me-img'/>
        </div>
       <div className="about__content"> 
        <div className="about__cards">
          <article className='about__card_content'>
            <FaAward className='about__icon'/>
            <h2>Experience</h2>
            <h5>0+ years</h5>
          </article>
          
          <article className='about__card_content'>
            <FiUsers  className='about__icon'/>
            <h2>Clients</h2>
            <h5>12+ Worldwide</h5>
          </article>
          
          <article className='about__card_content'>
            <BsFolder className='about__icon'/>
            <h2>Projects</h2>
            <h5>10+ Completed</h5>
          </article>
        </div>
        
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, vero commodi repellendus assumenda consectetur quibusdam a fugit, quis magni cumque amet corrupti atque quam ea tempore explicabo placeat, harum odit!</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      
      </div>
    </section>
  )
}

export default About
