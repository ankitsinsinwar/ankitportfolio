import React from 'react'
import './Intro.css'
import bg from '../../assets/ankit.jpg'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'
const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello</span>
            <span className='introtext'>i'm <span className='introName'>Ankit,</span> <br/> Frontend Developer</span>
            <p className='introPara'>I am a skilled and passionate web designer with experience in creating <br/>visually appealing and user friendly websites.</p>
            <Link to='contact'><button className='btn'><img src={btnImg} alt='hire me' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={} alt='Profile' className='bg'/>

    </section>
  )
}

export default Intro
