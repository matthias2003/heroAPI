import React from 'react';
import { Link } from "react-router-dom";
import './HeroSimplified.css';
import * as icon from '../../assets/icons/index.js';
    
function HeroSimplified({name, imgUrl, powerstats, id}) {
    return (
          <div className='featured__hero'>
          <h2>{name}</h2>
          <Link to={`/hero/${id}`}><img src={imgUrl} alt={ `${name}`} className='featured__hero__img' /></Link>
          <div className='featured__hero__stats'> 
          {
            Object.entries(powerstats).filter(([tab]) => { return ['combat','durability','intelligence','power','speed','strength'].includes(tab)}).map(([key, value]) => {
                return(
                    <div key={id+key}>
                        <img className='featured__hero__stats__icon' src={icon[key]} alt={key} />
                        <p>{value}</p>
                    </div>
            )})
          }
          </div>
        </div>
    );
}

export default HeroSimplified;