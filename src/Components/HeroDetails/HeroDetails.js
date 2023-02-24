import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Loader from "../Loader/Loader.js";
import { getTotalHeroInfoById } from '../../requests.js';
import './HeroDetails.css';
import Powerstats from '../Powerstats/Powerstats.js';

    
function HeroDetails() {
    const { id } = useParams();
    const [ isLoading, setLoadingState] = useState(true);
    const [detailedHeroesList, setDetailedHeroesList] = useState({});

    useEffect(() => {
        setLoadingState(true);
        getTotalHeroInfoById(id).then(searchResults => {
            const { data } = searchResults;

            if (data.error) {
                return;
            }

            setDetailedHeroesList(data);
            setLoadingState(false);
        });
    },[id])

    return (
        <section className='detailed'>
            { !isLoading && ( 
                <div className='detailed__hero'>
                    <h2>{detailedHeroesList.name}</h2> 
                    <img className='detailed__hero__img' src={detailedHeroesList.image.url} alt='Intelligence icon'/>
                    <Powerstats powerstats={detailedHeroesList.powerstats}></Powerstats>
                    <div className='detailed__hero__appearance'>
                        <h2>Appearance</h2>
                        {Object.keys(detailedHeroesList.appearance).map((key) => (<p>{key}: {detailedHeroesList.appearance[key]}</p>))}
                    </div>
                    <div className='detailed__hero__biography'>
                        <h2>Biography</h2>
                        {Object.keys(detailedHeroesList.biography).map((key) => (<p>{key}: {detailedHeroesList.biography[key]}</p>))}
                    </div>
                    <div className='detailed__hero__connections'>
                        <h2>Connections</h2>
                        {Object.keys(detailedHeroesList.connections).map((key) => (<p>{key}: {detailedHeroesList.connections[key]}</p>))}
                    </div>
                    <div className='detailed__hero__work'>
                        <h2>Work</h2>
                        {Object.keys(detailedHeroesList.work).map((key) => (<p>{key}: {detailedHeroesList.work[key]}</p>))}
                    </div>
                    {console.log(detailedHeroesList)}
                </div>
            )}
            { isLoading && <div className="loader-container"><Loader /></div> }
        </section>
    );

}

export default HeroDetails;