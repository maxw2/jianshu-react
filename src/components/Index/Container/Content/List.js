import React from 'react'
import { axiosIndexList } from '../../../../axios/Axios'

import ListContent from './ListContent'
import ContentLoader from 'react-content-loader'

import './List.scss'
function List() {
    const [list, setList] = React.useState([])
    const [load, setLoad] = React.useState(false)
    React.useEffect(() => {
        axiosIndexList()
            .then((res) => {
                setTimeout(() => {
                    setList(res.data.data)
                }, 1000)

            })
    }, [])

    function listMore() {
        if (list.length === 0 || load) return
        setLoad(true)
        axiosIndexList()
            .then((res) => {
                setTimeout(() => {
                    let data = list.concat(res.data.data)
                    setList(data)
                    setLoad(false)
                }, 1000)

            })
    }

    return (
        <div className='content-list'>
            {
                list.length !== 0 ?
                    <>
                        <ul>
                            {
                                list.map((val, index) => (
                                    <ListContent {...val} key={index} />
                                ))
                            }
                        </ul>
                        {
                            !load ?
                                <span className='list-more' onClick={listMore}>阅读更多</span>
                                : <ContentLoader>
                                    <rect x="320" y="0" rx="5" ry="5" width="70" height="70" />
                                    <rect x="0" y="0" rx="4" ry="4" width="200" height="15" />
                                    <rect x="0" y="30" rx="3" ry="3" width="270" height="12" />
                                    <rect x="0" y="50" rx="3" ry="3" width="250" height="12" />
                                </ContentLoader>
                        }
                    </> :
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

export default List