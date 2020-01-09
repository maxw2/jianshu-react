import React from 'react'
const initState = []

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_LIST':
            return state.concat(action.list);
        default:
            return state;
    }
}


const ThemeContext = React.createContext([])


export { ThemeContext, reducer, initState }