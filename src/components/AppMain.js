import React, { useState } from 'react'

export function AppMain() {
    const [todoList , setTodoList] = useState([])
    return (
        <>
            <div>AppMain</div>
            <input type="text" style={{ marginTop: 10 }} />
        </>
    )
}
