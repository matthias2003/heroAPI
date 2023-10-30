import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Loader from "../Loader/Loader.js";
import { getTotalHeroInfoById } from '../../requests.js';
import * as icon from '../../assets/icons/index.js'
import './HeroDetails.css';


    
function HeroDetails() {
    const { id } = useParams();
    const [ isLoading, setLoadingState] = useState(true);
    const [ detailedHero, setDetailedHero ] = useState({});

    useEffect(() => {
        setLoadingState(true);
        fetchDetailedHero(id);
    },[id])

    const fetchDetailedHero = async (id) => {
        const data  = await getTotalHeroInfoById(id);
        setDetailedHero(data);
        setLoadingState(false);
    }

    const formatKeys = str => {
        str = str.replace('-',' ');
        return str.charAt(0).toUpperCase() + str.slice(1);
      };


    return (
        <section className='detailed'>
            { !isLoading && ( 
                <div className='detailed__hero'>
                    <h2>{detailedHero.name}</h2> 
                    <img className='detailed__hero__img' src={detailedHero.image.url} alt='Intelligence icon'/>
                    <div className='detailed__hero__stats'> 
                        {
                          Object.entries(detailedHero.powerstats).filter(([tab]) => { return ['combat','durability','intelligence','power','speed','strength'].includes(tab)}).map(([key, value]) => {
                              return(
                                  <div key={id+key}>
                                      <img className='detailed__hero__stats__icon' src={icon[key]} alt={key} />
                                      <p>{value}</p>
                                      <p>{key}</p>
                                  </div>
                          )})
                        }
                    </div>
                    <div className='detailed__hero__appearance'>
                        <h2>Appearance</h2>
                        {Object.keys(detailedHero.appearance).map((key) => {
                            if (key === "height" || key === "weight") {
                               return <p key={detailedHero.id+key}>{formatKeys(key)}: {detailedHero.appearance[key][0]} / {detailedHero.appearance[key][1]}</p>
                            } else {
                                return <p key={detailedHero.id+key}>{formatKeys(key)}: {detailedHero.appearance[key]}</p>
                            }
                        })}
                    </div>

                    <div className='detailed__hero__biography'>
                        <h2>Biography</h2>
                        {Object.keys(detailedHero.biography).map((key) => (<p key={detailedHero.id+key}>{formatKeys(key)}: { detailedHero.biography[key]}</p>))}
                    </div>
                    <div className='detailed__hero__connections'>
                        <h2>Connections</h2>
                        {Object.keys(detailedHero.connections).map((key) => (<p key={detailedHero.id+key}>{formatKeys(key)}: {detailedHero.connections[key]}</p>))}
                    </div>
                    <div className='detailed__hero__work'>
                        <h2>Work</h2>
                        {Object.keys(detailedHero.work).map((key) => (<p key={detailedHero.id+key}>{formatKeys(key)}: {detailedHero.work[key]}</p>))}
                    </div>
                </div>
            )}
            { isLoading && <div className="loader-container"><Loader /></div> }
        </section>
    );
}

export default HeroDetails;