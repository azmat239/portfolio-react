import React from 'react';
import './testimony.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    name: 'Rahul Sharma',
    image: AVTR1,
    review: 'The type of reviews where there are some fluffy sentences and zero substance. On the surface, the review might look good, with feedback like "Good work" or "Keep doing what you'
  },
  {
    name: 'Ajay Ashwani',
    image: AVTR2,
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero suscipit laboriosam odio quasi dolorem numquam placeat, voluptates obcaecati minus nisi, cum, omnis nemo a'
  },
  {
    name: 'Ankit',
    image: AVTR3,
    review: "You've had a great period, shipping several impactful things. Yet, on the review, none of this is mentioned, "
  },{
    name: 'Abhishek',
    image: AVTR4,
    review: "The kind of review, after which you walk out, with your blood boiling. During the review, you get some negative feedback, which your manager tries to deliver in a civilized way "
  }
]

const Testimony = () => {
  return (
    <section id='testimony'>
      <h5>Client Reviews</h5>
      <h2>Testimonial</h2>

      <Swiper className="container container__testimonial"
       modules={[Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        

        {
          data.map(({name,image,review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
          
                  <div className="testimonial__avatar">
                    <img src={image} alt="no" height='100%'/>
                  </div>

                  <h2 className='tesimonial__client'>{name}</h2>
                  <h5 className='testimonial__review'>{review}</h5>


              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimony
