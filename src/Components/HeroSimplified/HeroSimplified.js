import React from 'react';
import { Link } from "react-router-dom";
import './HeroSimplified.css';
import Powerstats from '../Powerstats/Powerstats';

    
function HeroSimplified({name, imgUrl, powerstats, id}) {
    return (
          <div className='featured__hero'>
          <h2>{name}</h2>
          <Link to={`/hero/${id}`}><img src={imgUrl} alt={ `${name}`} className='featured__hero__img' /></Link>
          <Powerstats powerstats={powerstats}/>
          </div>
    );
}

export default HeroSimplified;