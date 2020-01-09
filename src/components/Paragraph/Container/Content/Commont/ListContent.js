import React from 'react'

import { Link } from 'react-router-dom'

import './ListContent.scss'
function ListContent(props) {
    return (
        <div className={`list-content list-content-${props.list.number}`}>
            <Link to={`/recommend/${props.list.id}`}>
                <div className='image'>
                    {
                        props.list.image ?
                            <img src={props.list.image} alt='img' /> : null
                    }
                </div>
            </Link>
            <div className='list'>
                <p className='name'>{props.list.name}</p>
                <span className='date'>
                    {`${props.list.number ? props.list.number + '楼' : ''} ${props.list.date}`}
                </span>
                <p className='content'>{props.list.context}</p>
                <div className='icon'>
                    <span><i className='fa fa-thumbs-up'></i>赞</span>
                    <span><i className='fa fa-comment'></i>回复</span>
                </div>
                <div className='replay'>
                    {
                        props.list.replay.length !== 0 ?
                            props.list.replay.map((val, index) => {
                                return <ListContent list={val} key={index} />
                            }) : null

                    }
                </div>
            </div>
        </div>
    )
}

export default ListContent