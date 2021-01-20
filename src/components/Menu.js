import React, { useState } from 'react'

import '../css/menu.css'

export const Menu = () => {

    const [navbar, setNavbar] = useState(false)

    const scrollBavbar = () => {

        if (window.scrollY >= 80 ) {
            setNavbar(true)
        }else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll' , scrollBavbar)
    return (
        <>
            <div className = {navbar ? 'active-menu cont-menu' : 'cont-menu'}>
                <div className = 'logo'>
                    <h3>juan cedeño</h3>
                </div>
                <div className = 'menu-link'>
                    <a href = '#home'>Home</a>
                    <a href = '#about'>About</a>
                    <a href = '#portafolio'>Portafolio</a>
                    <a href = '#footer'>Contact</a>
                </div>
            </div>
        </>
    )
}
