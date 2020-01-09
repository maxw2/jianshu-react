import React from 'react'

import Story from './Story/Story'
import Commont from './Commont/Commont'
import Download from './Download/Download'

import './Content.scss'
function Content() {
    return (
        <div className='container-content'>
            <Story />
            <Commont />
            <Download />
        </div>

    )
}

export default Content