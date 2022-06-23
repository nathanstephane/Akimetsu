import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header">
                <nav>
                    <ul>
                        <NavLink to="/"><li>Home</li></NavLink>
                        <NavLink to={"favorites"}><li>Favorites</li></NavLink>
                    </ul>
                </nav>
                <h1>Flights</h1>
            </div>
        </div>
    );
};

export default Header;