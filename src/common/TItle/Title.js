import React from 'react'
import TitleContainer from './TitleContainer'
import { Link, useRouteMatch, useParams, useHistory, useLocation } from 'react-router-dom'


import './Title.scss'
import Aa from './images/aa.svg'
import icon from './images/title_logo.png'
import beta from './images/title_beta.png'
import quill from './images/quill.svg'

function Title() {
    return (
        <nav className='title'>
            <div className='width-limit'>
                {/* logo */}
                <Link className='logo' to='/'>
                    <img src={icon} alt='icon' />
                </Link>
                {/* write */}
                <Link className='write el lg md' to='/' >
                    <img src={quill} alt='quill' />
                    <span>写文章</span>
                </Link>
                {/* sign */}
                <Link className='sign el lg md' to='/'>
                    <span>注册</span>
                </Link>
                {/* login */}
                <Link className='login el lg md' to='/'>
                    <span>登录</span>
                </Link>
                {/* Beta */}
                <Link className='beta el lg md' to='/'>
                    <img src={beta} alt='beta' />
                </Link>
                {/* Aa */}
                <Link className='style-mode el lg md' to='/'>
                    <img src={Aa} alt='aa' />
                </Link>
                <span className='sl' style={{ lineHeight: '55px' }}>创作你的创作</span>
                <TitleContainer />
            </div>

        </nav>
    )
}

export default Title