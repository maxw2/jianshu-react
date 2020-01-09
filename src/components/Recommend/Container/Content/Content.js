import React from 'react'

import BackgroundImg from './BackgroundImg'
import Author from './Author'
import Main from './Main'

import './Content.scss'
function Content() {
    return (
        <div className='container-content'>
            <BackgroundImg />
            <Author />
            <Main />

        </div>
    )
}

export default Content