import React from 'react'
import "./web.css"

function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#project'> 
                <i class="fi fi-rr-Edit-alt option-icon"></i> ⚒️ Project
                </a>
            </div>
            <div className='web-option'>
                <a href='#skill'> 
                    🤹🏽‍♂️ Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#aboutme'> 
                    👦🏽 About me
                </a>
            </div>


        </div>
    )
}

export default Web
