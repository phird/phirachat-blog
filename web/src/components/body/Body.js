import React from 'react'
import About from './about/About'
import './body.css'
import Info from './info/Info'
import Skill from './skills/Skill'
import Work from './works/Work'

function Body() {
    return (
        <div className='body'>
            <section id='info'>
                <Info></Info>
            </section>
            <section id='skill'>
                <Skill></Skill>
            </section>
            <section id='project'>
                <Work></Work>
            </section>
            <section id='aboutme'>
                <About></About>
            </section>
            

        </div>
    )
}

export default Body
