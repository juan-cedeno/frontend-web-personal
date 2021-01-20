import React from 'react'

export const ToolList = ({toolsItems}) => {

    const {image} = toolsItems

    return (
        < >
            <div className = 'img-tools'>
                <img src = {image} alt = 'img-tools'/>
            </div>
        </>
    )
}
