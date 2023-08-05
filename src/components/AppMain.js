import React, { useState } from 'react'

export function AppMain() {
    const [todoName, setTodoName] = useState("")
    const [todoList , setTodoList] = useState([])

    const handleChange  = (e) =>{
        const currValue = e.target.value
        setTodoName(currValue)
    }

    return (
        <>
            <div>AppMain</div>
            <input 
                type="text" 
                style={{ marginTop: 10, border: 'none', outline: '2px solid blue' }}
                value={todoName}
                onChange={handleChange}
            />
        </>
    )
}
