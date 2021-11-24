import React from 'react'
import { ProjectData } from '../../../data/project'
import './work.css'
import WorkCard from './WorkCard';
import Separator from '../../common/separator/Separator'

function Work() {
    const data= ProjectData ;
    return (
        <div className='projects'>
            <Separator/>
            <label className='section-title'>Projects</label>
            <div>
                {data.map((project)=>{
                    return <WorkCard project={project}/>
                })}
            </div>
        </div>
    )
}

export default Work
