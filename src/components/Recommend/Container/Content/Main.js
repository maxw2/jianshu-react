import React from 'react'
import { NavLink, Route, Switch, Redirect, useParams, useRouteMatch } from 'react-router-dom'

import MainWrite from './MainWrite'
import MainHot from './MainHot'
import MainCommment from './MainComment'

import './Main.scss'
function Main() {
    const match = useRouteMatch()
    const params = useParams()

    return (
        <div className='content-main'>
            <ul className='list'>
                <li>
                    <NavLink to={`${match.url}/write/${params.id}`} activeClassName='action'>
                        <i className='fa fa-file-text'></i>
                        最新发布
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${match.url}/comment/${params.id}`} activeClassName='action'>
                        <i className='fa fa-bell'></i>
                        最新评论
                    </NavLink>
                </li>
                <li>
                    <NavLink to={`${match.url}/hot/${params.id}`} activeClassName='action'>
                        <i className='fa fa-fire'></i>
                        热门
                    </NavLink>
                </li>
            </ul>
            <div className='main'>
                <Switch>
                    <Route exact path={`${match.url}/write/:id`}>
                        <MainWrite />
                    </Route>
                    <Route path={`${match.url}/comment/:id`}>
                        <MainCommment />
                    </Route>
                    <Route path={`${match.url}/hot/:id`}>
                        <MainHot />
                    </Route>
                    <Redirect from={`${match.path}`} to={`${match.path}/write/1`} />
                </Switch>

            </div>
        </div>
    )
}

export default Main