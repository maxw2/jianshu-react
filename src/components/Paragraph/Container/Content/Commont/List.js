import React from 'react'
import { ThemeContext } from './ThemeCommont'
import { AxiosParaCommont } from '../../../../../axios/Axios'
import { useParams } from 'react-router-dom'

import ListContent from './ListContent'

function List() {
    const params = useParams()
    const [data, dispatch] = React.useContext(ThemeContext)
    React.useEffect(() => {
        AxiosParaCommont(params.id)
            .then((res) => {
                setTimeout(() => {
                    dispatch({
                        type: 'ADD_LIST',
                        list: res.data.data
                    })
                }, 1500)
            })
    }, [dispatch, params.id])

    return (<div className='commont-list'>
        {
            data.length !== 0 ?
                <>
                    <p>全部评论 {data.length}</p>
                    {
                        data.sort((a,b)=>{
                            return b.number - a.number
                        }).map((val, index) => {
                            return <ListContent list={val} key={index} />
                        })
                    }
                </> : null
        }
    </div>





    )
}

export default List