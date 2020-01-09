import React from 'react'

import './StoryContent.scss'

function StoryContent(props) {
    const [data, setData] = React.useState(68)
    const [action,setAction] = React.useState(false)

    function like() {
        if (action) {
            setAction(!action)
            setData(data - 1)
        }else if(!action){
            setAction(!action)
            setData(data + 1)
        }
    }

    return (
        <div className='story-content'>
            <div className='content' dangerouslySetInnerHTML={{ __html: props.body }}></div>
            <div className='bottom'>
                <div className='left'>
                    <span className={`fa fa-thumbs-up ${action ? 'action' : null}`}
                        onClick={like}></span>
                    <span>{`${data}人点赞`}</span>
                    <span className='fa fa-thumbs-down'></span>
                </div>
                <div className='right'>
                    <span className='fa fa-book'></span>
                    <span>日记本</span>
                </div>
                
            </div>
            <hr />
        </div>
    )
}

export default StoryContent