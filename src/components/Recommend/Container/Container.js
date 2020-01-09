import React from 'react'

import Content from './Content/Content'
import Item from './Item/Item'

import './Container.scss'
function Container () {
    return (
        <div className='recommend-container container'>
            <Content />
            <Item />
        </div>
    )
}

export default Container 