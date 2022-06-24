import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header">
                <nav>
                    <ul>
                        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}  >
                            <li>Home</li>
                        </NavLink>
                        <NavLink to="/favorites" className={(nav) => (nav.isActive ? "nav-active" : "")}  >
                            <li>Favorites</li>
                            </NavLink>
                        <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li>About</li>
                            </NavLink>
                    </ul>
                </nav>
                <h1>Flights</h1>
            </div>
        </div>
    );
};

export default Header;