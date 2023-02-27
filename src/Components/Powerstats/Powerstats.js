import React from 'react';
import * as icon from '../../assets/icons';
import './Powerstats.css';

function Powerstats({ powerstats }) {
    return (
        <div className='hero__stats'>
            <div>
            {console.log(powerstats)}
                <img className='hero__stats__icon' src={icon.boxingIcon} alt='Combat icon'/>
                <p>{powerstats.combat}</p>
            </div>
            <div>
                <img className='hero__stats__icon' src={icon.durableIcon} alt='Durability icon'/>
                <p>{powerstats.durability}</p>
            </div>
            <div>
                <img className='hero__stats__icon' src={icon.thinkingIcon} alt='Intelligence icon'/>
                <p>{powerstats.intelligence}</p>
            </div>
            <div>
                <img className='hero__stats__icon' src={icon.speedometerIcon} alt='Speed icon'/>
                <p>{powerstats.speed}</p>
            </div>
            <div>
                <img className='hero__stats__icon' src={icon.fistIcon} alt='Strength icon'/>
                <p>{powerstats.strength}</p>
            </div>
        </div>
    )
}

export default Powerstats;