import React from 'react'
import Navbar from './UI/navbar/Navbar';

function MainNav() {
    var items_list = [
        {title: 'Home', href: 'home'},
        {title: '3 days', href: '3d'},
        {title: '7 days', href: '7d'},
        {title: '14 days', href: '14d'},
    ]

    return (
        <Navbar items={items_list}/>
    )
}

export default MainNav