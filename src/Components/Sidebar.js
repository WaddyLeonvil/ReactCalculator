import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import menuBars from '../images/menubars.png';

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
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to='/' className='nav-links'>
                        4-function Calc
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/trig' className='nav-links'>
                        Trigonometry
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/calc' className='nav-links'>
                        Calculus
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/stats' className='nav-links'>
                        Statistics
                    </Link>
                </li>
            </ul>
        </div>
    )
}

