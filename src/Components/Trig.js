import React, {useState} from 'react';
import './Trig.css';

export function Trig() {
    const [degrees, setDegrees] = useState("0");

    const handleChange = (e) => {
        if (e.target.value.match("^[0-9.]*$") != null) {
            setDegrees(e.target.value);
        }
    }

    return (
        <div id='trig-container'>
            <p>Trig Container</p>
            <label htmlFor="degree">Degrees: </label>
            <input type="text" value={degrees} name='degree' pattern='[0-9]' onChange={handleChange} />
            <p>{degrees}</p>


        </div>
    )
}
