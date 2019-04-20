import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render () {
        return (
            <div className="navbar">
                <div className="navbar__logo">
                    <img className="navbar__logo__img" src="/imgs/two-cents__logos/tcns-logo.png" alt="TwoCents Logo" title="TwoCents Logo"></img>
                </div>
                <nav className="navbar__nav--linear">
                    <a href="#about" title="About Page">About</a>
                    <a href="#Services" title="Services Page">Services</a>
                    <a href="#Support" title="Support Page">Support</a>
                    <a href="#Contact" title="Contact Page">Contact</a>
                </nav>
                <nav className="navbar__nav--hamburger">
                    <input type="checkbox" className="hamburger__checkbox" id="hamburger-toggle"></input>
        
                    <label for="hamburger-toggle" className="hamburger__button">
                        <span className="hamburger__icon">&nbsp;</span>
                    </label>

                    <div className="hamburger__background">&nbsp;</div>
                    
                    <div className="hamburger__nav">
                        <ul className="hamburger__list">
                            <li className="hamburger__item">
                                <a className="hamburger__link" href="#about" title="About Page">About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            </li>
                            <li className="hamburger__item">
                                <a className="hamburger__link" href="#Services" title="Services Page">Services</a>
                            </li>
                            <li className="hamburger__item">
                                <a className="hamburger__link" href="#Support" title="Support Page">Support</a>
                            </li>
                            <li className="hamburger__item">
                                <a className="hamburger__link" href="#Contact" title="Contact Page">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;