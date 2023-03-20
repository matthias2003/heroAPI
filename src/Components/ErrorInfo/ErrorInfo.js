import React from 'react';
import './ErrorInfo.css';
import errorImage from '../../assets/img/errorInfoImage.png'

function ErrorInfo({ error }) {  
    return(
        <div className='error_info'>
                <img src={errorImage} alt="Errro information"></img>
                <div className='error_info__text'>
                    <h2>There are no heroes here! I took care of them! HAHAHAHAH!</h2>
                    <h4>That's what really happened: {error}</h4>
                </div>
        </div>
    )
}   

export default ErrorInfo;