import React from 'react'
import './Hero.css'
import menu_img from '../../assets/menu_img.png'

const Hero = () => {
  return (
    <div id='home'className='hero'>
        <img className="profile" src={menu_img} alt=""/>
        <h1><span>I'm Alex Barbosa,</span> a frontend enthusiast living in Brazil</h1>
        <p>Curious engineer with a passion for frontend development, dedicated to exploring new technologies while transforming ideas into digital experiences.</p>
        <div id='social' className="hero-action">
            <div className="hero-linkedin"><a className='external-link' href="https://www.linkedin.com/in/alex-barbosa-3b3ba015a/" target="_blank" rel="noopener noreferrer">Linkedin</a></div>
            <div className="hero-github"><a className='external-link' href="https://github.com/barbosa10" target="_blank" rel="noopener noreferrer">Github</a></div>
        </div>
    </div>
  )
}

export default Hero
