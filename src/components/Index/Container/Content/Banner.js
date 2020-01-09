import React from 'react'
import { axiosIndexBanner } from '../../../../axios/Axios'

import TheBanner from '../../../../common/TheBanner'
import ContentLoader from 'react-content-loader'

import './Banner.scss'
function Banner() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        axiosIndexBanner()
            .then((res) => {
                setTimeout(() => {
                    setData(res.data.data)
                }, 0)
            })
    }, [])

    return (
        <div className='content-banner el lg md'>
            {
                data.length !== 0 ?
                    <TheBanner>
                        <ul>
                            {
                                data.map((val, index) => {
                                    return (
                                        <li className={`banner-list-${index} ${index === 0 ? 'action' : ''}`}
                                            key={val.id}>
                                            <img src={val.url} alt={val.id} />
                                        </li>
                                    )
                                })
                            }
                            <div className='box-width'>
                                <img src={data[0].url} alt='box' />
                            </div>
                        </ul>
                    </TheBanner>
                    : 
                    <ContentLoader>
                        <rect x='0' y='0' rx='3' ry='3' width='100%' height='100%' />
                    </ContentLoader>
            }
        </div>
    )
}

export default Banner