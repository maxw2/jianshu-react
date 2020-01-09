import React from 'react'

import image from './item-banner.jfif'
import './Banner.scss'
function Banner () {
    return (
        <div className='item-banner'>
            <img src={image} alt='img' />
        </div>
    )
}

export default Banner