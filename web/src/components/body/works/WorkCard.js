import React from 'react'
import './workcard.css'

function WorkCard({project}) {
    return (
        <div className='work-card'>
            <div className='work-info'>
                <label className='work-title'> {project.title}</label>
                <div className='work-links'>
                    {project.github && (
                        <a href={project.github} target="_blank">
                            <div className='link-button'>
                                <i> Github </i>
                            </div>
                        </a>)}

                    {project.github2 && (
                        <a href={project.github2} target="_blank">
                            <div className='link-button'>
                                <i> Github | My Task</i>
                            </div>
                        </a>)}

                    {project.demo && (
                        <a href={project.demo} target="_blank">
                            <div className='link-button'>
                                <i> Demo </i>
                            </div>
                        </a>)}    
                </div>

                <p>{project.about}</p>
                <div className='work-tags'>
                        {project.tags.map((tag)=>{
                            return(
                                <label className='tag'>{tag}</label>
                            )
                        })}
                </div>
            </div>
            <img src={project.image} className='work-photo'/>
        </div>
    )
}

export default WorkCard
