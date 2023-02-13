import React from "react";
import './HeroSimplified.css';

    
function HeroSimplified({name, imgUrl, powerStats}) {
    return (
          <div className='featured__hero'>
            <h2>{name}</h2>
            <img src={imgUrl} alt={ `${name}`} className='featured__hero__img' />
            <div className='featured__hero__stats'>
              <div>
                <p>{powerStats.combat}</p>
              </div>
              <div>
                <p>{powerStats.durability}</p>
              </div>
              <div>
                <p>{powerStats.intelligence}</p>
              </div>
              <div>
                <p>{powerStats.speed}</p>
              </div>
              <div>
                <p>{powerStats.strength}</p>
              </div>
            </div>
          </div>
    );

}

export default HeroSimplified;