import React, { useState } from 'react'

export function Person(/* props */) {


    const [age, setAge] = useState(28);
    const [name, setName] = useState('Taylor')
    const [todos, setTodos] = useState([])

   return (
    <>
    <div>Age {age}</div>
    <div>Name {name}</div>
    </>
   )
}
