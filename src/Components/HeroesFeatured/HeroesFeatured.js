import React, { useEffect, useState } from "react";
import { getBasicHeroInfoById } from '../../requests.js';
import HeroSimplified from "../HeroSimplified/HeroSimplified.js";
import Loader from "../Loader/Loader.js";
import './HeroesFeatured.css';

export default  function HeroesFeatured() {
    useEffect(() => {
        fetchAndRenderFeaturedHeroes();
      }, []);
    
      const [featuredHeroesList, setFeaturedHeroesList] = useState([]);
      const [isLoading, setLoadingState] = useState(true);

      const fetchAndRenderFeaturedHeroes = async () => {
        let heroes = [];

        const data = await getBasicHeroInfoById();
        heroes.push(data);
        
        setFeaturedHeroesList(data);
        setLoadingState(false);
      }

    return (
        <section className='featured'>
          <h1>Featured Heroes</h1>
          { !isLoading && <div className="featured__list">
            { featuredHeroesList.map( ({ name, imgUrl, powerstats, id}) => 
              <HeroSimplified key={id} name={name} imgUrl={imgUrl} powerstats={powerstats} id={id}/>
            )}
          </div>}
          { isLoading && <div className="loader-container"><Loader /></div>}
        </section>
    );
};