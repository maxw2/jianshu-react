import React from 'react'
import { axiosIndexBorder } from '../../../../axios/Axios'

import './Border.scss'
function Border() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        axiosIndexBorder()
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    return (
        <div className="item-border">
            <ul>
                {
                    data.length !== 0 ?
                        data.map((val, index) => {
                            return (
                                <li className={`list-${index}`} key={index}>
                                    <img src={val} alt='border' />
                                </li>
                            )
                        }) : null
                }
            </ul>
        </div>
    )
}

export default Border