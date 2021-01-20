import React, { useEffect, useState } from 'react'
import productService from '../services/proyect'
import '../css/proyect.css'
import { AllProyects } from './AllProyects'
import SkeletonProyect from '../helpers/skeleton-proyect'

export const Proyect = () => {

    const [proyect, setProyect] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const getDataProyect = async () => {
            setLoading(true)
            const data = await productService.getProyect()
            setLoading(false)
            setProyect(data.proyects)
        }

        getDataProyect()
    }, [])

    return (

        <>
            
            <h1 className = 'title'>Proyects</h1>
              <div className = 'proyects' id = 'portafolio'>
                  {
                      loading ? <SkeletonProyect/>:
                      proyect.map(proyects => (

                        <AllProyects proyects = {proyects} key = {proyects._id} />
                      ))
                    }
              </div>
        </>
    )
}
