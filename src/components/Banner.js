import React from 'react'

import banner from '../assets/banner.svg'

import '../css/banner.css'
import { Menu } from './Menu'

export const Banner = () => {
    return (
        <>
            <div className = 'cont-banner' id = 'home'>
                <Menu/>

                <div className = 'banner'>

                    <div className = 'img-banner'>
                        <img src = {banner} alt = 'img-banner'/>
                    </div>
                    <div className = 'banner-letter'>
                        <p>hello</p>
                        <h3>i am juan julio cedeño </h3>
                        <h2>react and node developer</h2>
                        <a href = 'https://drive.google.com/file/d/1nj6Fpr42t32I75T9o4p7h70oi-SG0PkI/view?usp=sharing' target = '_blank' rel="noreferrer">Get CV</a>
                    </div>

                </div>

            </div>
        </>
    )
}
