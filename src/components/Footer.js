import React from 'react'

import '../css/footer.css'

export const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <div className = 'cont-footer' id = 'footer'>
            <div className = 'footer'>
                <h3>Juan Cedeño</h3>
                <h2>809-820-0257</h2>
                <h2>juancc0305@gmail.com</h2>
                <div className = 'icon'>
                    <a href = 'https://github.com/juan-cedeno' target = '_blank' rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>

                    <a 
                    href = 'https://www.linkedin.com/in/juan-cede%C3%B1o-660a47196/' 
                    target = '_blank' 
                    rel="noreferrer" 
                    >

                    <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <p>Copyright &copy; All rights reserved {date}</p>
            </div>
        </div>
    )
}
