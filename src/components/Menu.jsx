import React from 'react';

import "../styles/layout/general.scss";
import "../styles/components/menu.scss";
import logo from "../assets/logos/bellotero.png";
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
                                    <Link to="/Bellotero.io">Home</Link>
                                </li>
                                <li>
                                    <Link to="/Bellotero.io">Solutions</Link>
                                </li>
                                <li>
                                    <Link to="/testimonials">Stories</Link>
                                </li>
                                <li>
                                    <Link to="/Bellotero.io">Partners</Link>
                                </li>
                                <li>
                                    <Link to="/Bellotero.io">About</Link>
                                </li>
                                <li>
                                    <Link to="/Bellotero.io">Blog</Link>
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