import React from 'react'
import { axiosIndexAuthor } from '../../../../axios/Axios'
import { Link } from 'react-router-dom'

import ContentLoader from 'react-content-loader'

import './Author.scss'
function Author() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        axiosIndexAuthor()
            .then(res => {
                setTimeout(() => {
                    setData(res.data.data)
                }, 1000)
            })
    }, [])

    function onChangeSort() {
        if (data.length === 0) return
        let newData = data.slice(0)
        newData.sort(() => {
            return Math.random() - 0.5
        })

        setData(newData)
    }


    return (
        <div className='item-author'>
            <div className='author-title'>
                <span>推荐作者</span>
                <span className='change' onClick={onChangeSort}>
                    <i className='fa fa-repeat'></i>
                    <span>换一批</span>
                </span>
            </div>
            <ul>
                {
                    data.length !== 0 ?
                        data.map((val, index) => {
                            if (index < 5) {
                                return (
                                    <li className={`author-list author-list-${index}`} key={index}>
                                        <Link to={`/recommend/1`}>
                                            <img className='img' src={val.image} alt='author' />
                                            <span className='follow'>
                                                <i className='fa fa-plus'></i>关注
                                            </span>
                                            <span>{val.name}</span>
                                            <p>{`写了${val.number}字 ${val.like}喜欢`}</p>
                                        </Link>
                                    </li>
                                )
                            }
                        }) :
                        ['', '', '', '', ''].map((val, index) => {
                            return (
                                <li className='author-list' key={index}>
                                    <ContentLoader>
                                        <rect x="0" y="0" rx="50%" ry="50%" width="70" height="70" />
                                        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                                        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                                    </ContentLoader>
                                </li>

                            )
                        })
                }
            </ul>
            <div className='button'>
                {/* <Link to={`/recommend/1`}> */}
                    <span>查看全部</span>
                    <i className='fa fa-angle-right'></i>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default Author