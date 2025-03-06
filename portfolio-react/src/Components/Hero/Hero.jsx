import React from 'react'
import './Hero.css'
import profile_img from '../../assets/about_profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Md Adil,</span> Web developer based in India.</h1>
      <p>I'm a web developer from India with experience in full-stack development, specializing in building scalable and efficient applications.</p>
    
      <div className="hero-action">
        <div className="hero-connect"><a class="anchor-link" href="#contact"></a>Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero