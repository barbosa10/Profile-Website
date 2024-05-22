import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "da69c132-6d33-493f-b2a7-17250844b003");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>If you have any new project in mind or simply want to exchange ideas and knowledge, please get in touch via this form and let's start turning ideas into reality. I can't wait to collaborate with you!</p>
                <div className="contact-details">
                    <div className="contact_detail">
                        <img src={mail_icon} alt="" />
                        <p>alexsandrobarbosah@gmail.com</p>
                    </div>
                    <div className="contact_detail">
                        <img src={call_icon} alt="" />
                        <p>+55 4799753-3531</p>
                    </div>
                    <div className="contact_detail">
                        <img src={location_icon} alt="" />
                        <p>SC, Brazil</p>
                    </div>                                           
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact_right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact