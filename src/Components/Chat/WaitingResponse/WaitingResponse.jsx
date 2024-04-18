

import React from 'react';
import './WaitingResponse.css';

const WaitingResponse = () => {
        
    return (
        <div id='Waiting-Response-Box'>
            {[...Array(3).keys()].map((Value) => (
                <span key={Value}>.</span>
            ))}
        </div>
    );
};

export default WaitingResponse;