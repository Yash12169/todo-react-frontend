import React from 'react'

export function Person({ data, show }) {

    if (show == false) {
        return <h1>Data is hidden for security reasons</h1>
    }
    else {
        return (
            <div>
                First name : {data.name}
                <br />
                Age : {data.age}
                <br />
                Gender : {data.gender}
            </div>
        )
    }
}
