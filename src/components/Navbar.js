

/*const links = [
    {
        name: 'Home',
        to: '/',
        active: 'home'
    },
    {
        name: 'Sobre Mi',
        to: '/about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '/',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: '/portfolio',
        active: 'portfolio'
    }
]*/

import { useLocation } from "react-router-dom";
import React, {useState} from 'react';


function Navbar(){
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

    return (
        <Box>
            <h1>aki va el navbar</h1>
        </Box>
    )
}

export default Navbar;