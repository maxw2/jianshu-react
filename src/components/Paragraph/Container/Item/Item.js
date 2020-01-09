import React from 'react'

import Banner from './Banner/Banner'
import Author from './Author/Author'
import Recommend from './Recommend/Recommend'

import './Item.scss'
function Item() {
    return (
        <div className='para-container-item el lg md'>
            <Banner />
            <Author />
            <div className='sticky'>
                <Recommend />
                <Banner />
            </div>
            
        </div>
    )
}

export default Item