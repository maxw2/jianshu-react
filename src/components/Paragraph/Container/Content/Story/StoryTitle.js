import React from 'react'

import { Link } from 'react-router-dom'

import './StoryTitle.scss'
function StoryTitle(props) {
    return (
        <div className='story-title'>
            <h1>{props.title}</h1>
            <div className='author'>
                <Link to={`/recommend/${props.author.id}`}>
                    <div className='img'>
                        <img src={props.author.image} alt='author' />
                    </div>
                </Link>
                <div className='right'>
                    <div className='top'>
                        <span>{props.author.name}</span>
                        <span>关注</span>
                    </div>
                    <div className='bottom'>
                        <span className='icon el lg md'><i className='fa fa-diamond'></i>{props.author.start}</span>
                        <span>{props.author.time}</span>
                        <span>{`字数 ${props.author.number}`}</span>
                        <span>{`阅读 ${props.author.watch}`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StoryTitle