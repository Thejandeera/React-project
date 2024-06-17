import React from 'react';
import './Header.css';

function Header() {
    const name = "Thejandeera Sandeepana";
    return (
        
        <header>
            <h1>{name}</h1>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <vr/>
                    <li><a href="">About</a></li>
                    <vr/>
                    <li><a href="">Services</a></li>
                    <vr/>
                    <li><a target="blank" href="https://www.linkedin.com/in/thejandeera-sandeepana-6baa17208">Linkedin</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;
