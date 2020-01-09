import React from 'react'
import Bg from './image/recommend-bg.jpg'

import './BackgroundImg.scss'

function BackgroundImg () {
    return (
        <div className='content-bg sl'>
            <img src={Bg} alt='bg' />
        </div>
    )
}

export default BackgroundImg