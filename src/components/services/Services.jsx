import React from 'react';
import './services.css';
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>
          What I Offer   
      </h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          
          
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>


          <ul className='services__ul'>
            
            
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            
            
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            
            
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            
            
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            
            
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </article>

        <article className='service'>
          
          <div className="service__head">
            <h3>Web Development</h3>
          </div>


          <ul className='services__ul'>
            
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
           
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
           
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>

            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Content Creator</h3>
          </div>


          <ul className='services__ul'>
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className='services_list'>
              <BsCheck className='services__list-icon' />
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services;
