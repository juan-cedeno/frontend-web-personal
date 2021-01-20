import React from 'react'

export const AllProyects = ({proyects}) => {

    const {name , link , image , type} = proyects

    return (
        <>
            <div className = 'cont-img-proyect'>
                <a href = {link} target = '_blank' rel="noreferrer">
                    <img src = {image} alt = {name}/>
                    <div className = 'visit'>
                        <p>{name}</p>
                    </div>
                    <p><i className="fas fa-circle"></i> {type}</p>
                </a>
            </div>
        </>
    )
}
