import React from 'react'
import './Home.css'
import juanma from '/juanma-photo.png'

export default function Home() {
    return (
        <div className='home'>
            <section className='home-about-section'>
            <div className='text-box'>
                <h3>Hey There!</h3>
                <h4>I'm Juanma</h4>
                <h1>Full Stack Developer MERN</h1>
            </div>
                <img className='' src={juanma}/>
            </section>

            {/* <About/>
            <Projects/> */}
        </div>
    )
}
