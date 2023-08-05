import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function AppMain() {
    const [todoName, setTodoName] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (e) => {
        const currValue = e.target.value
        setTodoName(currValue)
    }

    const handleSubmit = async () => {

    }

    useEffect(() => {
        async function fetchData() {
            console.log(process.env)
            const api = `${process.env.REACT_APP_BACKEND_SERVER}/todos/drf/list`
            const response = await axios.get(api)
            setTodoList(response.data)
        }
        fetchData()
    }, [])

    return (
        <>
            <div>AppMain</div>
            <input
                type="text"
                style={{ marginTop: 10, border: 'none', outline: '2px solid blue' }}
                value={todoName}
                onChange={handleChange}
            />
            <button style={{ marginLeft: 10, background: 'yellow', border: '2px solid blue', outline: 'none', borderRadius: 10, height: 30, width: 100 }}>Add my todo !</button>

            {todoList.map((todo, index) => <div key={index}>{todo.id} {todo.title}</div>)}
        </>
    )
}
