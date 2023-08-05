import React from 'react'
import logo from '../logo.svg';


export function AppHeader() {
    return (
        <>
            <img src={logo} style={{ height: 100, width: 100 }} />
            <h1>Todo App</h1>
        </>
    )
}
