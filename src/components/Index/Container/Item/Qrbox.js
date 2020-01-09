import React from 'react'
import { axiosIndexQrbox } from '../../../../axios/Axios'

import ContentLoader from 'react-content-loader'

import './Qrbox.scss'
function Qrbox() {
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        axiosIndexQrbox()
            .then(res => {
                setData(res.data.data)
            })
    }, [])
    return (
        <>
            {
                data ?
                    <div className='item-qrbox'>
                        <img src={data} alt='qrbox' />
                        <div className='info'>
                            <p>下载简书手机App <i className='fa fa-angle-right'></i></p>
                            <p>随时随地发现和创作内容</p>
                        </div>
                        <div className='show'>
                            <img src={data} alt='bigshow' />
                        </div>
                    </div> :
                    <ContentLoader>
                        <rect x='0' y='0' rx='3' ry='3' width='100%' height='80%' />
                    </ContentLoader>
            }
        </>
    )
}

export default Qrbox