import React from 'react'
import Carditem from './Carditem'
import './Cards.css'
import img1 from './images/img-1.jpg'
import img2 from './images/img-2.jpg'
import img3 from './images/img-3.jpg'
import img4 from './images/img-4.jpg'
import img5 from './images/img-5.jpg'
import img6 from './images/img-6.jpg'

function Cards() {
    return (
        <div className="card">
            <h1> Check Out These Destination!</h1>  
            <div className="card__container">
                <div className="card__wrapper">
                    <ul className="card__item">
                        <Carditem
                        src={img1}
                        text="Explore deep inside amazon jungle"
                        label="Adventure"
                        path="/Services"
                        />
                        <Carditem
                        src={img2}
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                        label="Adventure"
                        path="/Services"
                        />
                         <Carditem
                        src={img3}
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                        label="Adventure"
                        path="/Services"
                        />
                        

                    </ul>
                    <br></br>
                    <ul className="card__item">
                        <Carditem
                        src={img4}
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                        label="Adventure"
                        path="/Services"
                        />
                        <Carditem
                        src={img5}
                        text="Explore city of love paris"
                        label="Adventure"
                        path="/Services"
                        />
                        <Carditem
                        src={img6}
                        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
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
