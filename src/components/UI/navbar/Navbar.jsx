import React from 'react';
import './nav.css';

const Navbar = function ({items}) {
    return (
        <nav className='navbar'>
            <ul>
                {items.map((item) => 
                    <li key={item.href}><a href={item.href}>{item.title}</a></li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar;