import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.webp';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const Portfolio = () => {
  const data = [
    {
      id : '1',
      image : IMG1,
      title : 'This Is A Project Title',
      github : 'https://www.github.com/azmat239',
      demo : 'https://www.google.com'
    },
    {
      id : '2',
      image : IMG2,
      title : 'Some Random project for Website ',
      github : 'https://www.github.com/azmat239',
      demo : 'https://www.google.com'
    },
    {
      id : '3',
      image : IMG3,
      title : 'College Website Using React ',
      github : 'https://www.github.com/azmat239',
      demo : 'https://www.google.com'
    }
    ,
    {
      id : '4',
      image : IMG4,
      title : 'Portfolio Website using React ',
      github : 'https://www.github.com/azmat239',
      demo : 'https://www.google.com'
    },
    {
      id : '5',
      image : IMG5,
      title : 'E-Commerce Website ',
      github : 'https://www.github.com/azmat239',
      demo : 'https://www.google.com'
    },
    {
      id : '6',
      image : IMG6,
      title : 'MAtrimonial project for Website ',
      github : 'https://www.github.com/azmat239',
      demo : 'https://www.google.com'
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        
        {
          data.map(({id,image,title,github,demo})=>{
           return(
           <article key={id} className='portfolio__item'>
              <div  className="portfolio__item-image">
                <img src={image} alt={title} height='100%' />
              </div>

              <h3>{title}</h3>

              <div className="portfolio__item-btn">
                <a href={github} className='btn' target='__blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='__blank'>Demo</a>
              </div>
            </article>
           )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio
