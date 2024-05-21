import React from 'react'
import { useRef } from 'react'
import './Contact.css'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_vzl5oep', 'template_qzf17p5', form.current, {
            publicKey: '2tTKeZkVoYR8xA721',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent !')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id='contactPage'>
     
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='your name' name='from_name'/>
                <input type='email' className='email' placeholder='your email' name='from_email' />
                <textarea className='msg' name='message' rows="5" placeholder='your massage'></textarea>
                <button type='submit' value='send' className='submitBtn'>Submit</button>

                <div className='links'>
                  <a href='https://www.linkedin.com/in/ankitsinsinwar/' target='_blank'> <img src={linkedinIcon} alt='Facebook' className='link'/></a>
                  <a href='https://github.com/ankitsinsinwar' target='_blank'> <img src={githubIcon} alt='Twitter' className='link'/></a>
                    <img src={YoutubeIcon} alt='Youtube' className='link'/>
                    <img src={InstagramIcon} alt='Instagram' className='link'/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact