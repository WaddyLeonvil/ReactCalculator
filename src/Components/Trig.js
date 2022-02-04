import React, {useState} from 'react';
import 'mathjs';
import './Trig.css';
import {cos, csc, sec, sin, tan, unit} from 'mathjs';

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
                    <div className="value-left" id='degrees'>Degrees</div>
                    <input type="text" value={degrees} name='degree' autocomplete='off' onChange={handleChange} />
                </div>
                <div className="trig-value-row">
                    <div className="value-left">Sine</div>
                    <div className="value-right">{Math.round((sin(unit(parseInt(degrees), 'deg')) + Number.EPSILON) * 1000) / 1000}</div>
                </div>
                <div className="trig-value-row">
                    <div className='value-left'>Cosine</div>
                    <div className="value-right">{Math.round((cos(unit(parseInt(degrees), 'deg')) + Number.EPSILON) * 1000) / 1000}</div>
                </div>
                <div className="trig-value-row">
                    <div className='value-left'>Tangent</div>
                    <div className="value-right">{(degrees === '90' || degrees === '270') ? 'Undefined' : Math.round((tan(unit(parseInt(degrees), 'deg')) + Number.EPSILON) * 1000) / 1000}</div>
                </div>
                <div className="trig-value-row">
                    <div className="value-left">Cosecant</div>
                    <div className="value-right">{Math.round((csc(unit(parseInt(degrees), 'deg')) + Number.EPSILON) * 1000) / 1000}</div>
                </div>
                <div className="trig-value-row">
                    <div className="value-left">Secant</div>
                    <div className="value-right">{Math.round((sec(unit(parseInt(degrees), 'deg')) + Number.EPSILON) * 1000) / 1000}</div>
                </div>
                <div className="trig-value-row">
                    <div className='value-left'>Cotangent</div>
                    <div className="value-right">{(degrees === '0' || degrees === '90' || degrees === '180' || degrees === '270') ? 'Undefined' : Math.round((tan(unit(parseInt(degrees), 'deg')) + Number.EPSILON) * 1000) / 1000}</div>
                </div>
            </div>
        </div>
    )
}
