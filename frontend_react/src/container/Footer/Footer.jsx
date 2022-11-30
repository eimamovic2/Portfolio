import React, {useState} from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap} from '../../wrapper';
import { client } from '../../client';
import './Footer.scss'
const Footer = () => {
  const [formData, setFormData] = useState({ name:'', email:'', message:''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false);

  const { name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({ ... formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })

  }


  return (
    <>
      <h2 className="head-text">Feel free to contact me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card"> 
          <img src={images.gmail} alt="email "/>
          <a href="mailto:eimamovic997@gmail.com" className="p-text">eimamovic997@gmail.com</a>
        </div>
        <div className="app__footer-card"> 
          <img src={images.mobile} alt="email "/>
          <a href="tel +387 (062) 277-845" className="p-text">+387 (062) 277-845</a>
        </div>
      </div>

    {!isFormSubmitted ? 
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" placeholder="Your name" name="name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
          className="p-text"
          placeholder="Your Message"
          value={message}
          name="message"
          onChange={handleChangeInput}
          />
          
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      : <div>
        <h3 className="head-text">Thank you for getting in touch!</h3>
      </div>
      }

        <div className="copyright">
          <p className="p-text>">@2022 Elvir Imamović</p>
          <p className="p-text>">All rights reserved</p>
        </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'), 
  'contact', 
  'app__whitebg'
  )