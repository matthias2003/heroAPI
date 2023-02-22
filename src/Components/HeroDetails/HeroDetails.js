import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Loader from "../Loader/Loader.js";
import { getTotalHeroInfoById } from '../../requests.js';
import './HeroDetails.css';

    
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
                    <img className='featu' src={detailedHeroesList.image.url} alt='Intelligence icon'/>
                    
                </div>
            )}
            { isLoading && <div className="loader-container"><Loader /></div> }
        </section>
    );

}

export default HeroDetails;