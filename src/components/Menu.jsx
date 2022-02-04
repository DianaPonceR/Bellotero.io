import React from 'react';

import "src/styles//layout/general.scss";
import "src/styles//components/menu.scss";
import logo from "src/assets/logos/bellotero.png";
import {Link, Outlet} from "react-router-dom";

const Menu = () => {
    return (
        <>
            <header>
                <div className="menu-wrapper">
                    <h1>
                        <a href="#"><img src={logo} alt=""/></a>
                    </h1>
                    <input type="checkbox" id="nav-toggle" className="nav-toggle" />

                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/">Solutions</Link>
                                </li>
                                <li>
                                    <Link to="/testimonials">Stories</Link>
                                </li>
                                <li>
                                    <Link to="/">Partners</Link>
                                </li>
                                <li>
                                    <Link to="/">About</Link>
                                </li>
                                <li>
                                    <Link to="/">Blog</Link>
                                </li>
                            </ul>
                        </nav>
                        <Outlet />

                        <label htmlFor="nav-toggle" className="nav-toggle-label">
                            <span></span>
                        </label>
                </div>
            </header>
        </>
    );
};

export default Menu;