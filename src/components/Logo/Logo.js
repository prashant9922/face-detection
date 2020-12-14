import React from 'react';
import Tilt from 'react-tilt';
import brain1 from './brain1.png';
import './Logo.css';

const Logo = () =>{
    return(
    <div className='ma4 mt0'> 
        <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner p3"> <img alt='logo' src={brain1}/> </div>
     </Tilt>
    </div>
    );
}

export default Logo;
    