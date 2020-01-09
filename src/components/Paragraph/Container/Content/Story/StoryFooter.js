import React from 'react'

import { Link } from 'react-router-dom'

import './StoryFooter.scss'
function StoryFooter(props) {
    return (
        <div className='story-footer'>
            <div className='top'>
                <p>"小礼物走一走，来简书关注我"</p>
                <span>赞赏支持</span>
                <p>还没有人赞赏，支持一下</p>
            </div>
            <div className='bottom'>
                <Link to={`/recommend/${props.author.id}`} style={{ width: '50px', height: '50px' }}>
                    <img src={props.author.image} alt='img' />
                    <div className='author'>
                        <p>{props.author.name}</p>
                        <p className='el lg '>{`总资产552 (约50.97元) 共写了8.9W字 获得1,308个赞 共455个粉丝`}</p>
                        <p className='sl md'>小礼物走一走，来简书关注我</p>
                        <span className='follow'>关注</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default StoryFooter