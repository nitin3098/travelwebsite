import React from 'react'
import Carditem from './Carditem'
import './Cards.css'

function Cards() {
    return (
        <div className="card">
            <h1> Check Out These Destination!</h1>  
            <div className="card__container">
                <div className="card__wrapper">
                    <ul className="card__item">
                        <Carditem
                        src="images/img-1.jpg"
                        text="Explore deep inside amazon jungle"
                        label="Adventure"
                        path="/Services"
                        />
                        <Carditem
                        src="images/img-2.jpg"
                        text="Explore deep inside balli"
                        label="Adventure"
                        path="/Services"
                        />
                         <Carditem
                        src="images/img-3.jpg"
                        text="Explore deep inside balli"
                        label="Adventure"
                        path="/Services"
                        />
                        

                    </ul>
                    <br></br>
                    <ul className="card__item">
                        <Carditem
                        src="images/img-4.jpg"
                        text="Explore deep inside amazon jungle"
                        label="Adventure"
                        path="/Services"
                        />
                        <Carditem
                        src="images/img-5.jpg"
                        text="Explore deep inside balli"
                        label="Adventure"
                        path="/Services"
                        />
                        <Carditem
                        src="images/img-6.jpg"
                        text="Explore deep inside amazon jungle"
                        label="Adventure"
                        path="/Services"
                        />

                    </ul>

                </div>
            </div>          
        </div>
    )
}

export default Cards
