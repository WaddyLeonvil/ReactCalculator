import React from 'react';
import './Trig.css';

export function Trig() {
    return (
        <div id='trig-container'>
            <p>Trig Container</p>
            <label htmlFor="degree">Degrees: </label>
            <input type="text" className='degree' id='degree' name='degree'/>
        </div>
    )
}
