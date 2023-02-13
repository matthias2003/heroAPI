import React, { useEffect, useState } from "react";
import { getBasicHeroInfoById } from '../../requests.js';
import HeroSimplified from "../HeroSimplified/HeroSimplified.js";
import './HeroesFeatured.css';

const featuredHeroesIds = [247,265,71,69,491];
    
function HeroesFeatured() {
    useEffect(() => {
        fetchAndRenderFeaturedHeroes();
      }, []);
    
      const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
    
      const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = [];
        for (const heroId of featuredHeroesIds) {
          const data = await getBasicHeroInfoById(heroId);
          heroes.push(data);
        }
        setFeaturedHeroesList(heroes)
      }

    return (
        <section className='featured'>
        { featuredHeroesList.map( ({ name, imgUrl, powerStats}) => 
          <HeroSimplified name={name} imgUrl={imgUrl} powerStats={powerStats} />
        )}
      </section>
    );

}

export default HeroesFeatured;