import React from 'react'

import AuthorList from '../Author/AuthorList'

import './Recommend.scss'
function Recommend() {
    const list = [{
        title: '10个令你变强的网站',
        read: 543
    }, {
        title: '副业刚需 | 大学两年，我在闲鱼赚了20万',
        read: 6556
    }, {
        title: '2019创业项目，热门创业项目',
        read: 719
    }, {
        title: '“工资5000，副业30000”，这3种人不做副业，亏大了！',
        read: 2005
    }, {
        title: '2020，前端还值得吗？',
        read: 666
    }]

    return (
        <div className='item-recommend'>
            <div className='recommend-title'>推荐阅读</div>
            {
                list.map((val, index) => {
                    return <AuthorList list={val} key={index} />
                })
            }
        </div>
    )
}

export default Recommend