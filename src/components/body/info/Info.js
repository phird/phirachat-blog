import React from 'react'
import "./info.css"

function Info() {
    return (
        <div className='info'>
            <div className='info-top'>
                <div className='info-info'>
                    Hello 👋🏽  I'm  Phirachat Kochanil <br/>
                    I'm a Computer Engineering Student 
                </div>
                <div className='info-photo'>
                        <img src={require('../../../assets/phird.png').default} className='picture'/>
                </div>
            </div>
            
            <div className='info-botton'>  
            </div>
        </div>
    )
}

export default Info
