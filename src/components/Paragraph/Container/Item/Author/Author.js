import React from 'react'

import { useParams, Link } from 'react-router-dom'
import { AxiosParaStory } from '../../../../../axios/Axios'

import AuthorList from './AuthorList'

import './Author.scss'
function Author() {
    const params = useParams()
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        AxiosParaStory(params.id)
            .then((res) => {
                setData(res.data.data.author)
            })
    })
    const list = [{
        title: '我的百家号原创丢了......',
        read: 312
    }, {
        title: '家长：清明时节，我们可以对孩子进行哪方面的教育？',
        read: 194
    }]


    return (
        <div className='item-author'>
            {
                data ?
                    <>
                        <div className='author-title'>
                            <Link to={`/recommend/1`}>
                                <img src={data.image} alt='' />
                            </Link>
                            <span className='follow'>关注</span>
                            <p className='name'>{data.name}</p>
                            <p className='context'>总资产552（约50.06元）</p>
                        </div>
                        <div className='author-context'>
                            {
                                list.map((val, index) => {
                                    return (
                                        <AuthorList list={val} key={index} />
                                    )
                                })
                            }
                        </div>
                    </> : null
            }
        </div>
    )
}

export default Author