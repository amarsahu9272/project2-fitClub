import React from 'react'
import'./About.css'
import ReactPlayer from 'react-player'
// import Header from '../Components/Header/Header'
function About() {
  return (
    <div className='About'>
    {/* <Header/> */}
      <ReactPlayer controls url='https://youtu.be/BR0jT6JxH-o'/>
    </div>
  )
}

export default About
