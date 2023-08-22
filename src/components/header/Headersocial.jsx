import React from 'react'
import {BsLinkedin,BsInstagram} from 'react-icons/bs';
import {FaGithub}  from 'react-icons/fa'


const Headersocial = () => {
  return (
    <div className='header__Social'>
      <a href="https:///www.linkedin.com" target='__blank'><BsLinkedin/></a>
      <a href="https:///www.github.com" target='__blank'><FaGithub/></a>
      <a href="https:///www.instagram.com" target='__blank'><BsInstagram/></a>
    </div>
  )
}

export default Headersocial
