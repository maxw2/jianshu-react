import React from 'react'
import './Content.scss'

// mobile
import HomePage from './homepage/HomePage'
//
import Banner from './Banner'
import List from './List'

function Content () {
    return (
        <div className='container-content'>
            <HomePage />
            <Banner />
            <List />
        </div>
    )
}

export default Content