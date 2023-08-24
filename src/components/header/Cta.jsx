import React from 'react'
import CV from '../../assets/Azmat.pdf'


const Cta = () => {
  return (
    <div className='cta'> 
      <a href={CV} download className='btn'>Download Cv</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cta;
