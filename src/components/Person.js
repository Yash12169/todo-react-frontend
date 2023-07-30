import React, { useState } from 'react'

export function Person(/* props */) {


    // let age = 28
    const [age, setAge] = useState(28);
    const [name, setName] = useState('Taylor')
    const [todos, setTodos] = useState([])

    /*
    function handleClick() {

    }
    */

    const handleClick = () => {
        console.log("button is clicked")
        // age = age + 10
        setAge(age+10)

    }

    console.log("age", age)

    return (
        <>
            <div>Age {age}</div>
            <div>Name {name}</div>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}
