import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function AppMain() {
    const [loading, setLoading] = useState(true)
    const [todoName, setTodoName] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleChange = (e) => {
        const currValue = e.target.value
        setTodoName(currValue)
    }

    const handleSubmit = async () => {
        const api = `${process.env.REACT_APP_BACKEND_SERVER}/drf/create`
        const response = await axios({
            method: 'post',
            url: api,
            data: {
                title: todoName,
            }
        })
        const todoObject = response.data
        setTodoList([todoObject, ...todoList])
        setTodoName("")
        toast.success("Todo Added")
    }

    const handleDelete = async (todoId) => {
        const api = `${process.env.REACT_APP_BACKEND_SERVER}/drf/delete`
        const response = await axios({
            method: 'delete',
            url: api,
            data: {
                todo_id: todoId,
            }
        })
        const newTodoList = todoList.filter(todoObj => todoObj.id != todoId)
        setTodoList(newTodoList)
        toast.error("Todo Deleted")
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            const api = `${process.env.REACT_APP_BACKEND_SERVER}/drf/list`
            const response = await axios.get(api)
            setTodoList(response.data)
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <>
            <ToastContainer />
            <div>AppMain</div>
            <input
                type="text"
                style={{ marginTop: 10, border: 'none', outline: '2px solid blue' }}
                value={todoName}
                onChange={handleChange}
            />
            <button
                style={{ marginLeft: 10, background: 'yellow', border: '2px solid blue', outline: 'none', borderRadius: 10, height: 30, width: 100 }}
                onClick={handleSubmit}
            >
                Add my todo !
            </button>
            {loading && <p>Loading Data ...</p>}
            {todoList.map((todo, index) =>
                <div key={index}
                    style={{ marginTop: 30, border: '1px solid blue', width: 300, height: 50, margin: '0 auto' }}>
                    {todo.id} {todo.title}
                    <button
                        style={{ marginLeft: 10, marginTop: 10, background: 'red', border: '1px solid blue', outline: 'none', borderRadius: 10, height: 30, width: 100 }}
                        onClick={() => handleDelete(todo.id)}
                    >
                        Delete this todo !
                    </button>
                </div>)}
        </>
    )
}
