import React from 'react';
import dogImage from '../dog3.jpeg';


const About = () => {
    return (
        <div>
            <h2>About Us</h2>
            <div>
                <img src={dogImage} alt="Business Image" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id ultrices aliquam, urna nunc luctus nunc, id lacinia nunc elit a nunc. Sed nec nisl euismod, tincidunt nunc id, aliquam nunc. Sed nec nisl euismod, tincidunt nunc id, aliquam nunc.</p>
            </div>
        </div>
    );
};

export default About;
