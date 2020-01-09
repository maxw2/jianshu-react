import React from 'react'
import { ThemeContext } from './ThemeCommont'

import './Write.scss'
function Write() {
    const [list, dispatch] = React.useContext(ThemeContext)
    const [hover, setHover] = React.useState(false)
    const postEl = React.useRef(null)
    function getDate() {
        let date = new Date()
        let day = `${date.getMonth() + 1}.${date.getDate()}`
        let time = `${date.getHours()}:${date.getMinutes()}`
        return `${day} ${time}`
    }
    function hoverPost() {
        if (hover) return
        setHover(true)
    }
    // 按键改变
    function button(ev) {
        let value = ev.currentTarget.value
        let post = postEl.current
        if (value) {
            post.style.cursor = 'pointer'
            post.style.opacity = '1'
        } else {
            post.style.cursor = ''
            post.style.opacity = ''
        }
    }
    //
    function getWrite(ev) {
        let el = ev.currentTarget

        if (!el.getAttribute('style')) return
        let value = document.querySelector('.paragraph .commont-write .write textarea').value
        let number = list[list.length - 1].number
        let date = getDate()
        console.log(date)
        dispatch({
            type: 'ADD_LIST',
            list: [{
                number: number + 1,
                name: 'Max',
                image: '',
                date: `${date}`,
                context: value,
                replay: []
            }]
        })

    }


    return (
        <div className='el lg md'>
            {
                list.length !== 0 ?
                    <>
                        <div className='commont-write'>
                            <span className='picture'></span>
                            <div className='write'>
                                <textarea placeholder='写下你的评论...'
                                    onFocus={hoverPost}
                                    onChange={button}></textarea>
                                <div className={`post ${hover ? 'hover' : null}`} >
                                    <span ref={postEl} onClick={getWrite}>发布</span>
                                    <span>取消</span>
                                </div>
                            </div>
                        </div>
                    </> : null
            }

        </div>

    )
}

export default Write