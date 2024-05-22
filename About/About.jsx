import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a mechanical engineer with a penchant for web development, who decided to explore this passion in the technology industry. With five years of experience in the automotive industry, I have developed a strong foundation in technical disciplines and project development practices.</p>
                    <br />
                    <p>Nowadays, I'm excited to apply my technical experience and passion for innovation in the role of Product Marketing Manager, where I hope to bring a unique perspective and creative solutions to the technology market.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:'70%'}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:'50%'}}/></div>
                    <div className="about-skill"><p>Java Script</p><hr style={{width:'60%'}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:'50%'}}/></div>
                </div>
            </div>
        </div>   
    </div>
  )
}

export default About