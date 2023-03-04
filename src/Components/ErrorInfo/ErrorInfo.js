import React from 'react';
import './ErrorInfo.css';

function ErrorInfo({ error }) {  
    return(
        <div className='error_info'>
            <div>
                <h2>Something went wrong!</h2>
                <h3>Why? {error}</h3>
            </div>
        </div>
    )
}   

export default ErrorInfo;