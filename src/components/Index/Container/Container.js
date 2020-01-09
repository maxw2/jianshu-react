import React from 'react'
import './Container.scss'

import Content from './Content/Content'
import Item from './Item/Item'

function Container () {
    return (
        <div className='container index-container'>
            <Content />
            <Item />
        </div>
    )
}

export default Container