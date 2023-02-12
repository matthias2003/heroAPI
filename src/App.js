import React, { useEffect, useState } from 'react';
import { getBasicHeroInfoById } from './requests.js';
import Nav from './Components/Nav/Nav.js';
import './App.css';

const featuredHeroesIds = [247,263,71,69,491];

function App() {
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
    <>
    <Nav></Nav>
    <main>
      <section className='featured'>
        { featuredHeroesList.map( ({ name, imgUrl, powerStats}) => 
          <div className='featured__hero'>
            <h2>{name}</h2>
            <img src={imgUrl} alt={ `${name}`} />
            <div className='featured__hero_stats'>
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
        )}
      </section>
    </main>
    <footer></footer>
    </>
  );
}

export default App;
