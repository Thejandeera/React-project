import React from 'react';
import './Header.css';

function Header() {
    const name = "Thejandeera Sandeepana";
    return (
        
        <header>
            <h1 className="name">{name}</h1>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <vr/>
                    <li><a href="">About Me</a></li>
                    <vr/>
                    <li><a href="">Projects</a></li>
                    <vr/>
                    <li><a target="blank" href="https://www.linkedin.com/in/thejandeera-sandeepana-6baa17208">Social Media</a></li>
                    <vr/>
                    <li><a href="">Contact</a></li>

                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header;
