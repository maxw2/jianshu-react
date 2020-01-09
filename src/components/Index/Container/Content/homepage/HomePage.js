import React from 'react'

import './HomePage.scss'

function HomePage () {
    const data = ['读书','摄影','@IT.互联网','自然科普','手绘','故事','旅行.在路上']
    return (
        <div className='content-homePage sl'>
            <div className='homePage-title'>
                <span>热门专题</span>
                <span>
                    <i className='fa fa-repeat'></i>
                    换一批
                </span>
            </div>
            <div className='homePage-list'>
                {
                    data.map((val,index)=>(
                        <span key={index}>{val}</span>
                    ))
                }
            </div>
            <hr />
        </div>
    )
}

export default HomePage