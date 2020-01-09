import React from 'react'

import Banner from './Banner'
import Author from './Author'
import Dynamic from './Dynamic'

function Item() {
    return (
        <div className='container-item el lg md'>
            <Banner />
            <Author />
            <Dynamic />
        </div>
    )
}

export default Item