import React from 'react'
import { AxiosRecomComment } from '../../../../axios/Axios'
import { useParams } from 'react-router-dom'
import ContentLoader from 'react-content-loader'

import ListContent from '../../../Index/Container/Content/ListContent'

function MainComment() {
    const params = useParams()
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        AxiosRecomComment(params.id)
            .then(res => {
                setTimeout(() => {
                    setData(res.data.data)
                }, 500)
            })
    }, [params.id])
    return (
        <div className='main-comment'>
            {
                data.length !== 0 ?
                    <ul>
                        {
                            data.map((val, index) => {
                                return <ListContent {...val} key={index} />
                            })
                        }
                    </ul> :
                    <ContentLoader>
                        <rect x="320" y="0" rx="5" ry="5" width="70" height="70" />
                        <rect x="0" y="0" rx="4" ry="4" width="200" height="15" />
                        <rect x="0" y="30" rx="3" ry="3" width="270" height="12" />
                        <rect x="0" y="50" rx="3" ry="3" width="250" height="12" />
                    </ContentLoader>
            }
        </div>
    )
}

export default MainComment