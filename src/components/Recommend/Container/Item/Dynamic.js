import React from 'react'


import './Dynamic.scss'
function Dynamic() {
    return (
        <div className='item-dynamic'>
            <div>
                <i className='fa fa-bars'></i>
                他关注的专题/文集/连载
                </div>
            <div>
                <i className='fa fa-heart-o'></i>
                他喜欢的文章
            </div>
        </div>
    )
}

export default Dynamic