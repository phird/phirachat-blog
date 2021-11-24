import React from 'react'
import './skill.css'
import Separator from '../../common/separator/Separator'
import { SkillsData } from '../../../data/skills';
import SkillCard from './Skill-card';

function Skill() {
    const data = SkillsData;
    return (
        <div className='skills'>
            <Separator/>
            <label className='section-title'>Skills</label>
            <div className='skills-container'>
                {data.map((item)=>{
                    return (
                        <div className='skill-section'>
                            <label className='skill-section-title'>{item.type}</label>
                            <div className='skill-list'>
                                {item.list.map((skill) => {
                                    return <SkillCard skill={skill}/>;   
                                })} 
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Skill
