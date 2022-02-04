import React, {useState} from 'react';
import 'mathjs';
import './Trig.css';
import {cos, sin, tan, unit} from 'mathjs';

export function Trig() {
    const [degrees, setDegrees] = useState("0");

    const handleChange = (e) => {
        if (e.target.value === '') {
            setDegrees("0");
        }
        else if (e.target.value.substr(0, 1) === '0') {
            setDegrees(e.target.value.substr(1, 1));
        }
        else if (e.target.value.match("^[0-9]*$") != null) {
            setDegrees(e.target.value);
        }
    }
    return (
        <div id='trig-container'>
            <br/>
            <div className="trig-values">
                <div className="trig-value-row">
                    <label htmlFor="degree">Degrees: </label>
                    <input type="text" value={degrees} name='degree' autocomplete='off' onChange={handleChange} />
                </div>
                <div className="trig-value-row">
                    <p>Sine: {Math.round((sin(unit(parseInt(degrees), 'deg')) + Number.EPSILON) * 1000) / 1000}</p>
                </div>
                <div className="trig-value-row">
                    <p>Cosine: {Math.round((cos(unit(parseInt(degrees), 'deg')) + Number.EPSILON) * 1000) / 1000}</p>
                </div>
            </div>
            
            
            
            <p>Tangent: {(degrees === '90' || degrees === '270') ? 'Undefined' : Math.round((tan(unit(parseInt(degrees), 'deg')) + Number.EPSILON) * 1000) / 1000}</p>


        </div>
    )
}
