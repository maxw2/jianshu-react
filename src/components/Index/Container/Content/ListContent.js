import React from 'react'
import { Link } from 'react-router-dom'
import './ListContent.scss'

function ListContent(props) {
    return (
        <li className={`list-content-c list-content-` + props.id}>
            <div className='left'>
                <Link to={`/paragraph/${props.id}`}>
                    <p className='list-title'>{props.title}</p>
                </Link>
                <p className='content abstract'>{props.content}</p>
                <div className='tag'>
                    <span className='diamond'>
                        <i className='fa fa-diamond'></i>
                        {props.start}
                    </span>
                    <span className='author'>{props.author}</span>
                    <span className='comment'>
                        <i className='fa fa-comment'></i>
                        {props.comment}
                    </span>
                    <span className='like'>
                        <i className='fa fa-heart'></i>
                        {props.like}
                    </span>
                </div>
            </div>
            <div className='right'>
                {
                    props.image ?
                        <Link to={`/paragraph/${props.id}`}>
                            <div className='list-image picture'>
                                <img src={props.image} alt='img' />
                            </div>
                        </Link> : null
                }

            </div>
        </li>
    )
}

export default ListContent