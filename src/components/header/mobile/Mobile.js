import React from 'react'
import './mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className='mobile'>
            <div className='close-icon'  onClick={()=>setIsOpen(!isOpen)}>
                <i>โ</i> 
            </div>
            <div className='mobile-options'>
                <div className='mobile-option'>
                    <a href='#project'> 
                    <i class="fi fi-rr-Edit-alt option-icon"></i> โ๏ธ Project
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#skill'> 
                    ๐คน๐ฝโโ๏ธ Skills
                    </a>
                </div>
                <div className='mobile-option'>
                    <a href='#aboutme'> 
                    ๐ฆ๐ฝ About me
                    </a>
                </div> 
            </div>
        </div>
    )
}

export default Mobile
