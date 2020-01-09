import React from 'react'

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
                        <a href='/'>
                            <span>首页</span>
                        </a>
                    </li>
                    <li className='down'>
                        <a href='/'>
                            <span>下载App</span>
                        </a>
                    </li>
                    <li className='search'>
                        <input placeholder='搜索' />
                    </li>
                </ul>
            </div>
            <div className='title-container container lg el'>
                <ul>
                    <li>
                        <a className='index' href='/'>
                            <span className='el'>首页</span>
                            <span className='fa fa-compass lg icon'></span>
                        </a>
                    </li>
                    <li>
                        <a className='down' href='/'>
                            <span className='el'>下载App</span>
                            <span className='fa fa-tablet lg icon'></span>
                        </a>
                    </li>
                    <li>
                        <form className='search'>
                            <input className='input' placeholder='搜索' />
                            <a className='icon' href='/'>
                                <span className='fa fa-search'></span>
                            </a>
                        </form>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default TitleContainer