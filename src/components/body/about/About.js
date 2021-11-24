import React from 'react'
import './about.css'
import Separator from '../../common/separator/Separator'

function About() {
    return (
        <div className='contact'>
            <Separator/>
            <label className='section-title'>Contact me</label>
            <div className='contact-info'>
                <div className='contact-list'>
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111498.png"/> : phiq27
                    <br/>
                    <p> 📞 +66 87 545 8849</p>
                    <p> 📭 phirachat_k@cmu.ac.th</p>
                </div>
                
            </div>
        </div>
    )
}

export default About
