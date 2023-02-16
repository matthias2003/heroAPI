import React from 'react';
import * as icon from '../../assets/icons';
import './HeroSimplified.css';

    
function HeroSimplified({name, imgUrl, powerStats, id}) {
    return (
          <div className='featured__hero'>
            <h2>{name}</h2>
            <Link to={`/hero/${id}`}><img src={imgUrl} alt={ `${name}`} className='featured__hero__img' /></Link>
            <div className='featured__hero__stats'>
              <div>
                <img className='featured__hero__stats__icon' src={icon.boxingIcon} alt='Combat icon'/>
                <p>{powerStats.combat}</p>
              </div>
              <div>
              <img className='featured__hero__stats__icon' src={icon.durableIcon} alt='Durability icon'/>
                <p>{powerStats.durability}</p>
              </div>
              <div>
              <img className='featured__hero__stats__icon' src={icon.thinkingIcon} alt='Intelligence icon'/>
                <p>{powerStats.intelligence}</p>
              </div>
              <div>
              <img className='featured__hero__stats__icon' src={icon.speedometerIcon} alt='Speed icon'/>
                <p>{powerStats.speed}</p>
              </div>
              <div>
              <img className='featured__hero__stats__icon' src={icon.fistIcon} alt='Strength icon'/>
                <p>{powerStats.strength}</p>
              </div>
            </div>
          </div>
    );

}

export default HeroSimplified;