import React from 'react'
import './Item.scss'

import Border from './Border'
import Qrbox from './Qrbox'
import Author from './Author'


function Item () {
    return (
        <div className='container-item el lg md'>
            <Border />
            <Qrbox />
            <Author />
        </div>
    )
}

export default Item