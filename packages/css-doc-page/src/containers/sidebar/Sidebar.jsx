import React from 'react';
import './Sidebar.css';
import logo from '../../assets/img/logosymbol.png';
import chevron from '../../assets/img/chevron.svg';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar_image">
                <img src={logo} alt="Logo"/>
            </div>
            <nav className="NavigationItems">
                <div>
                    <p>GETTING STARTED</p>
                </div>
                <div>
                    <p>VISUAL GUIDELINES</p> <img src={chevron} alt="chevron"/>
                </div>
                <div>
                    <p>COMPONENTS</p> <img src={chevron} alt="chevron"/>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;