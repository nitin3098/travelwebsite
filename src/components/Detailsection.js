import React from 'react'
import { Button } from './Button'
import './Detailsection.css'
import '../App.css'
import vid from './videos/video-1.mp4'

function Detailsection() {
    return (
        <div className="hero-container">
           <video src={vid} autoPlay loop muted />  
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for?</p>
            <div className="hero-btns">
               <Button className="btns" buttonstyle="btn--outline" buttonsize="btn--large">GET STARTED</Button>

               <Button className="btns" buttonstyle="btn--primary" buttonsize="btn--large">
                   WATCH TRAILER
                   <i className='far fa-play-circle'/>
               </Button>

            </div>
            
        </div>
    )
}

export default Detailsection
