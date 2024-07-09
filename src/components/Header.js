import * as React from "react";
import logo from "../assets/images/site-logo2.png"

 
function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Company Logo" className="logo" height={80} />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;