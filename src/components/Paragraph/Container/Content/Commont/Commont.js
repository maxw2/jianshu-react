import React from 'react'
import { ThemeContext, reducer, initState } from './ThemeCommont'

import Write from './Write'
import List from './List'
import './Commont.scss'
function Commont() {
    const [list, dispatch] = React.useReducer(reducer, initState)
    return (
        <ThemeContext.Provider value={[list, dispatch]}>
            <div className='content-commont'>
                <Write />
                <List />
            </div>
        </ThemeContext.Provider >
    )
}

export default Commont