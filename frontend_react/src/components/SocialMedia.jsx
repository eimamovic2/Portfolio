import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <a href="https://github.com/eimamovic2" target="_blank">
          <BsGithub />
        </a>  
        </div>
        <div>
          <a href="https://www.facebook.com/eimamovic997/" target="_blank">
            <FaFacebookF />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia