import React from 'react'

import './AuthorList.scss'
function AuthorList(props) {
    return (
        <div className='author-list'>
            <p className='list-title'>{props.list.title}</p>
            <span className='read'>{`阅读 ${props.list.read}`}</span>
        </div>
    )
}

export default AuthorList