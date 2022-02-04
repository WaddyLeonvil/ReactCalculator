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
            
            <Link to='/' className='nav-links'>
                <div className="nav-item">
                    4-function Calc
                </div>
            </Link>
            <Link to='/trig' className='nav-links'>
                <div className="nav-item">
                    Trigonometry
                </div>
            </Link>
            {/* <Link to='/calc' className='nav-links'>
                <div className="nav-item">
                    Calculus
                </div>
            </Link>
            <Link to='/stats' className='nav-links'>
                <div className="nav-item">
                    Statistics
                </div>
            </Link>
            <Link to='/convert' className='nav-links'>
                <div className="nav-item">
                    Unit Conversion
                </div>
            </Link> */}
        </div>
    )
}
