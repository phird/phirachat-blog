import React from 'react'
import './mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close-icon'  onClick={()=>setIsOpen(!isOpen)}>
                <i>❌</i> 
            </div>
            <div className='mobile-options'>
                <div className='mobile-option'>
                    <a href='#project'> 
                    <i class="fi fi-rr-Edit-alt option-icon"></i> ⚒️ Project
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#skill'> 
                    🤹🏽‍♂️ Skills
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#aboutme'> 
                    👦🏽 About me
                    </a>
                </div> 
            </div>
        </div>
    )
}

export default Mobile
