import React from 'react'

import studies from '../assets/studi.svg'

import '../css/studies.css'

export const Studies = () => {
    return (
        <>
            <div className = 'cont-studies' id = 'about'>
                <div className = 'img-studies'>
                    <img src = {studies} alt = 'studies'/>
                </div>

                <div className = 'letter-studies'>

                    <h2>applied studies</h2>
                    <p><i className="fas fa-check"></i> electrical technician <span>instituto politécnico hainamosa</span></p>
                    <p><i className="fas fa-check"></i> 4to semester software development <span>itla</span></p>
                    <p><i className="fas fa-check"></i> level 1a english <span>academy european</span></p>
                    <p><i className="fas fa-check"></i> Learning React.js from Scratch <span>samcode</span></p>
                    <p><i className="fas fa-check"></i> React: From zero (HOOK , MERN) <span>udemy</span></p>
                </div>
            </div>
        </>
    )
}
