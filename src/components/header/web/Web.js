import React from 'react'
import "./web.css"

function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#project'> 
                <i class="fi fi-rr-Edit-alt option-icon"></i> โ๏ธ Project
                </a>
            </div>
            <div className='web-option'>
                <a href='#skill'> 
                    ๐คน๐ฝโโ๏ธ Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='#aboutme'> 
                    ๐ฆ๐ฝ About me
                </a>
            </div>


        </div>
    )
}

export default Web
