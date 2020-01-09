import React from 'react'

import { useParams } from 'react-router-dom'
import { AxiosRecomAuthor } from '../../../../axios/Axios'

import './Author.scss'
function Author() {
    const [data, setData] = React.useState({})
    const params = useParams()
    React.useEffect(() => {
        AxiosRecomAuthor(params.id)
            .then(res => {
                setData(res.data.data)
            })
    }, [params.id])

    return (
        <div className='content-author'>
            <div className='recommend-title'>
                <div className='author'>
                    <div className='image'>
                        <img src={data.image} alt='img' />
                    </div>
                    <div className='right'>
                        <h1>{data.name}</h1>
                        <div>
                            <span>{`关注 ${data.follow}`}</span>
                            <span>{`粉丝 ${data.fans}`}</span>
                            <span>{`收获喜欢 ${data.like}`}</span>
                        </div>
                    </div>
                </div>
                <div className='follow'></div>
            </div>
            <div className='mobile sl'>
                <span className='follow'>关注</span>
                <span className='reward'>赞赏作者</span>
            </div>
        </div>
    )
}

export default Author