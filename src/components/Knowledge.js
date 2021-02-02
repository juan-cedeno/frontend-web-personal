import React, { useEffect, useState } from 'react'
import toolService from '../services/tool'
import { ToolList } from './ToolList'

import '../css/tool.css'
import SkeltetorTools from '../helpers/skeletor-tools'

export const Knowledge = () => {

    const [tools, setTools] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        const getDataTool = async () => {
            const data = await toolService.getTools()
            setLoading(false)
            setTools(data.tools)
        }
        
        getDataTool()
    }, [])

    return (
        <>
            <h1 className = 'title'>skills</h1>
           <div className = 'cont-tools'>
               <div className = 'tools'>
                   {
                       loading ? <SkeltetorTools/> :
                       tools.map( toolsItems => (
                           <ToolList toolsItems = {toolsItems} key = {toolsItems._id}/>
                       ) )
                   }
               </div>

               <div className = 'cont-contacto'>
                   <p>wanting to learn new technologies</p>

                   <div className = 'cont-phone'>

                       <div>
                             <i className="fas fa-phone-alt"></i>
                       </div>

                       <div className = 'phone'>
                            <p>phone number</p>
                            <p className = 'number'>809-820-0257</p>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}
