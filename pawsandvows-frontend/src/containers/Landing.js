import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import dog1 from '../dog1.jpeg';
import dog2 from '../dog2.jpeg';
import dog3 from '../dog3.jpeg';


const Landing = () => {
    return (
        <div>
            <h1>Welcome to Paws and Vows!</h1>
            <Carousel>
                <div>
                    <img src={dog1} alt="Dog 1" style={{ width: '1200px', height: '1200px'}} />
                    <p className="legend">Dog 1</p>
                </div>
                <div>
                    <img src={dog2} alt="Dog 2"  style={{ width: '1200px', height: '1200px'}} d/>
                    <p className="legend">Dog 2</p>
                </div>
                <div>
                    <img src={dog3} alt="Dog 3" style={{ width: '1200px', height: '1200px'}} />
                    <p className="legend">Dog 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Landing;
