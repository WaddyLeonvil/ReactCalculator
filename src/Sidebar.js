import React, {useState} from 'react';
import './Sidebar.css';
import menuBars from './images/menubars.png';

export function Sidebar() {
    const [menu, setMenu] = useState(true);

    const handleClick = () => {
        setMenu(!menu);
    }


    return (
        <div className={menu ? "sidebar" : "sidebar hidden"}>
            <div className="topbar">
                <img src={menuBars} alt="" onClick={handleClick}/>
                WME Calculator
            </div>
        </div>
    )
}

