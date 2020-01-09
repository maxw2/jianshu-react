import React from 'react'
import TitleContainer from './TitleContainer'

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
                <a className='logo' href='/'>
                    <img src={icon} alt='icon' />
                </a>
                {/* write */}
                <a className='write el lg md' href='/'>
                    <img src={quill} alt='quill' />
                    <span>写文章</span>
                </a>
                {/* sign */}
                <a className='sign el lg md' href='/'>
                    <span>注册</span>
                </a>
                {/* login */}
                <a className='login el lg md' href='/'>
                    <span>登录</span>
                </a>
                {/* Beta */}
                <a className='beta el lg md' href='/'>
                    <img src={beta} alt='beta' />
                </a>
                {/* Aa */}
                <a className='style-mode el lg md' href='/'>
                    <img src={Aa} alt='aa' />
                </a>
                <span className='sl' style={{lineHeight: '55px'}}>创作你的创作</span>
                <TitleContainer />
            </div>

        </nav>
    )
}

export default Title