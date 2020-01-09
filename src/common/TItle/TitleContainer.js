import React from 'react'
import { Link } from 'react-router-dom'

import './TitleContainer.scss'

function TitleContainer() {
    return (
        <>
            <div className='title-toggle md'>
                <label htmlFor='toggle-checkbox' className='button'>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <input id='toggle-checkbox' type='checkbox' />
                <ul className='nav'>
                    <li className='index'>
                        <Link to='/'>
                            <span>首页</span>
                        </Link>
                    </li>
                    <li className='down'>
                        <Link to='/'>
                            <span>下载App</span>
                        </Link>
                    </li>
                    <li className='search'>
                        <input placeholder='搜索' />
                    </li>
                </ul>
            </div>
            <div className='title-container container lg el'>
                <ul>
                    <li>
                        <Link className='index' to='/'>
                            <span className='el'>首页</span>
                            <span className='fa fa-compass lg icon'></span>
                        </Link>
                    </li>
                    <li>
                        <Link className='down' to='/'>
                            <span className='el'>下载App</span>
                            <span className='fa fa-tablet lg icon'></span>
                        </Link>
                    </li>
                    <li>
                        <form className='search'>
                            <input className='input' placeholder='搜索' />
                            <Link className='icon' to='/'>
                                <span className='fa fa-search'></span>
                            </Link>
                        </form>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default TitleContainer