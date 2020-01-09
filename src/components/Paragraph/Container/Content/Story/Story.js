import React from 'react'
import { useParams } from 'react-router-dom'
import { AxiosParaStory } from '../../../../../axios/Axios'

import { Facebook } from 'react-content-loader'
import Title from './StoryTitle'
import Content from './StoryContent'
import Footer from './StoryFooter'

import './Story.scss'
function Story() {
    const params = useParams()
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        AxiosParaStory(params.id)
            .then(res => {
                setTimeout(() => {
                    setData(res.data.data)
                }, 1000)
            })
    }, [params.id])

    return (
        <div className='content-story'>
            {
                data ?
                    <>
                        <Title title={data.title} author={data.author} />
                        <Content body={data.body} />
                        <Footer author={data.author} />
                    </> : <Facebook />
            }
        </div>
    )
}

export default Story