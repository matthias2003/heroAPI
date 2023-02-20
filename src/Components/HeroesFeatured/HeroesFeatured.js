import React, { useEffect, useState } from "react";
import { getBasicHeroInfoById } from '../../requests.js';
import HeroSimplified from "../HeroSimplified/HeroSimplified.js";
import Loader from "../Loader/Loader.js";
import './HeroesFeatured.css';

const featuredHeroesIds = [247,265,71,69,491];

export default  function HeroesFeatured() {
    useEffect(() => {
        fetchAndRenderFeaturedHeroes();
      }, []);
    
      const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
      const [isLoading, setLoadingState] = useState(true);

      const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = [];
        for (const heroId of featuredHeroesIds) {
          const data = await getBasicHeroInfoById(heroId);
          heroes.push(data);
        }
        setFeaturedHeroesList(heroes);
        setLoadingState(false);
      }

    return (
        <section className='featured'>
          <h1 className="">Featured Heroes</h1>
          { !isLoading && <div className="featured__list">
            { featuredHeroesList.map( ({ name, imgUrl, powerStats, id}) => 
              <HeroSimplified key={id} name={name} imgUrl={imgUrl} powerStats={powerStats} id={id}/>
            )}
          </div>}
          { isLoading && <div className="loader-container"><Loader /></div>}
      </section>
    );

};